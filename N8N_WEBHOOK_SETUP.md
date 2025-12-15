# n8n Webhook Setup Guide for VOLTIX Chatbot

This guide will help you set up the n8n workflow to connect your VOLTIX Pro 10K chatbot with an AI model using RAG (Retrieval-Augmented Generation).

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Step 1: Create the Webhook Trigger](#step-1-create-the-webhook-trigger)
4. [Step 2: Set Up Vector Store for RAG](#step-2-set-up-vector-store-for-rag)
5. [Step 3: Configure the AI Agent](#step-3-configure-the-ai-agent)
6. [Step 4: Create the Respond to Webhook Node](#step-4-create-the-respond-to-webhook-node)
7. [Step 5: Update Your Chatbot Configuration](#step-5-update-your-chatbot-configuration)
8. [Message Format Reference](#message-format-reference)
9. [Testing Your Setup](#testing-your-setup)
10. [Troubleshooting](#troubleshooting)

---

## Overview

### Architecture Flow
```
User Input → Chatbot → Webhook → n8n → RAG Query → AI Model → Response → Webhook Response → Chatbot → User
```

### What You'll Build
1. A webhook endpoint that receives chat messages
2. A RAG system that retrieves product knowledge
3. An AI agent that generates contextual responses
4. A response mechanism that sends replies back to the chatbot

---

## Prerequisites

Before starting, ensure you have:

- [ ] n8n instance (self-hosted or cloud)
- [ ] OpenAI API key (or other LLM provider)
- [ ] Vector database access (Pinecone, Qdrant, Supabase, or n8n's built-in)
- [ ] The product knowledge document (`VOLTIX_Pro_10K_Product_Knowledge.md`)

---

## Step 1: Create the Webhook Trigger

### 1.1 Add Webhook Node

1. Create a new workflow in n8n
2. Add a **Webhook** node as the trigger
3. Configure the webhook:

```
Node Settings:
- HTTP Method: POST
- Path: chatbot (or your preferred path)
- Response Mode: "Respond to Webhook" (IMPORTANT!)
```

### 1.2 Webhook URL

After saving, your webhook URL will be:

**Production:**
```
https://your-n8n-instance.com/webhook/chatbot
```

**Testing:**
```
https://your-n8n-instance.com/webhook-test/chatbot
```

### 1.3 Expected Request Body

The chatbot sends this JSON structure:

```json
{
  "userMessage": "What are the specs of the power bank?",
  "systemMessage": "You are VOLTIX Assistant...",
  "conversationHistory": [
    {
      "role": "assistant",
      "content": "Hi! I'm VOLTIX Assistant..."
    },
    {
      "role": "user",
      "content": "What are the specs?"
    }
  ],
  "sessionId": "session_1702656000000_abc123xyz",
  "timestamp": "2024-12-15T10:30:00.000Z",
  "metadata": {
    "page": "https://yoursite.com/",
    "userAgent": "Mozilla/5.0..."
  }
}
```

---

## Step 2: Set Up Vector Store for RAG

### 2.1 Embed the Product Knowledge

#### Option A: Using n8n Workflow for Embedding

1. Create a separate workflow for embedding
2. Add nodes:
   - **Read File** → Read `VOLTIX_Pro_10K_Product_Knowledge.md`
   - **Text Splitter** → Split into chunks (recommended: 500-1000 tokens)
   - **Embeddings OpenAI** → Generate embeddings
   - **Vector Store Insert** → Store in your vector database

#### Option B: Manual Upload to Vector Store

Upload the `VOLTIX_Pro_10K_Product_Knowledge.md` file to your vector store:

**Pinecone:**
```javascript
// Use Pinecone's document upload API or their web interface
```

**Supabase:**
```sql
-- Create embeddings table if not exists
CREATE TABLE IF NOT EXISTS product_embeddings (
  id SERIAL PRIMARY KEY,
  content TEXT,
  embedding VECTOR(1536),
  metadata JSONB
);
```

### 2.2 Configure Vector Store Node in n8n

Add a **Vector Store** retrieval node after your webhook:

```
Node Settings:
- Operation: Retrieve Documents
- Vector Store: [Your vector store]
- Query: {{ $json.userMessage }}
- Top K: 3-5 (number of relevant chunks to retrieve)
```

---

## Step 3: Configure the AI Agent

### 3.1 Add AI Agent Node

Add the **AI Agent** node to your workflow.

### 3.2 System Message Configuration

Use this system message (already set in the chatbot, but can be customized in n8n):

```
You are VOLTIX Assistant, a friendly and knowledgeable customer support chatbot for VOLTIX Pro 10K Magnetic Wireless Power Bank.

Your role is to:
- Answer questions about the VOLTIX Pro 10K power bank product
- Help customers understand features, specifications, and compatibility
- Assist with pre-purchase questions and concerns
- Provide troubleshooting guidance
- Guide users toward making a purchase when appropriate

Key Guidelines:
1. Be helpful, professional, and enthusiastic about the product
2. Keep responses concise but informative (2-4 sentences typically)
3. If you don't know something, say so and offer to connect them with human support
4. Use the provided context to give accurate product information
5. Don't make up specifications or features not in the documentation
6. For complex issues, suggest contacting support@voltixpower.com

Current Product Context:
{{ $node["Vector Store Retrieval"].json.documents }}

Conversation History:
{{ $json.conversationHistory }}
```

### 3.3 AI Model Settings

```
Model: gpt-4o-mini (or gpt-4o for better quality)
Temperature: 0.7 (balanced creativity/accuracy)
Max Tokens: 500 (keep responses concise)
```

### 3.4 Connect the Tools (RAG)

Connect your Vector Store node as a tool to the AI Agent:
- Add "Vector Store Tool" 
- Configure it to query product knowledge based on user question

---

## Step 4: Create the Respond to Webhook Node

### 4.1 Add Respond to Webhook Node

This node sends the AI response back to your chatbot.

### 4.2 Response Configuration

```
Node Settings:
- Respond With: JSON
- Response Body:
```

```json
{
  "response": "{{ $json.output }}",
  "sessionId": "{{ $('Webhook').item.json.sessionId }}",
  "timestamp": "{{ $now.toISO() }}"
}
```

### 4.3 Alternative Response Structures

The chatbot can handle multiple response formats. Choose one:

**Option 1 - Simple:**
```json
{
  "response": "{{ $json.output }}"
}
```

**Option 2 - Detailed:**
```json
{
  "message": "{{ $json.output }}",
  "success": true,
  "timestamp": "{{ $now.toISO() }}"
}
```

**Option 3 - With Metadata:**
```json
{
  "output": "{{ $json.output }}",
  "confidence": 0.95,
  "sources": ["product-specs", "faq"],
  "sessionId": "{{ $('Webhook').item.json.sessionId }}"
}
```

---

## Step 5: Update Your Chatbot Configuration

### 5.1 Set Webhook URL

Open `src/components/Chatbot/Chatbot.jsx` and update:

```javascript
const CHATBOT_CONFIG = {
  // Replace with your actual n8n webhook URL
  webhookUrl: 'https://your-n8n-instance.com/webhook/chatbot',
  // ... rest of config
}
```

### 5.2 Adjust Response Parsing (If Needed)

The chatbot tries multiple response fields:

```javascript
const botResponse = data.response || data.message || data.output || data.text
```

If your n8n response uses a different field name, add it to this list.

---

## Message Format Reference

### Request (Chatbot → n8n)

| Field | Type | Description |
|-------|------|-------------|
| `userMessage` | string | The user's current message |
| `systemMessage` | string | System prompt for AI context |
| `conversationHistory` | array | Previous messages in the conversation |
| `sessionId` | string | Unique identifier for the chat session |
| `timestamp` | string | ISO timestamp of the message |
| `metadata.page` | string | Current page URL |
| `metadata.userAgent` | string | Browser user agent |

### Response (n8n → Chatbot)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `response` | string | Yes* | The AI's response text |
| `message` | string | Yes* | Alternative field for response |
| `output` | string | Yes* | Alternative field for response |
| `text` | string | Yes* | Alternative field for response |

*At least one of these fields must be present.

---

## Complete n8n Workflow JSON

Here's a starter workflow you can import into n8n:

```json
{
  "name": "VOLTIX Chatbot RAG",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "chatbot",
        "responseMode": "responseNode",
        "options": {}
      },
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300]
    },
    {
      "parameters": {
        "options": {}
      },
      "name": "AI Agent",
      "type": "@n8n/n8n-nodes-langchain.agent",
      "position": [650, 300]
    },
    {
      "parameters": {
        "respondWith": "json",
        "responseBody": "={{ {\"response\": $json.output, \"sessionId\": $('Webhook').item.json.sessionId} }}"
      },
      "name": "Respond to Webhook",
      "type": "n8n-nodes-base.respondToWebhook",
      "position": [900, 300]
    }
  ],
  "connections": {
    "Webhook": {
      "main": [[{"node": "AI Agent", "type": "main", "index": 0}]]
    },
    "AI Agent": {
      "main": [[{"node": "Respond to Webhook", "type": "main", "index": 0}]]
    }
  }
}
```

---

## Testing Your Setup

### 1. Test Webhook Manually

Use cURL or Postman to test:

```bash
curl -X POST https://your-n8n-instance.com/webhook-test/chatbot \
  -H "Content-Type: application/json" \
  -d '{
    "userMessage": "What is the price of the power bank?",
    "systemMessage": "You are a helpful assistant.",
    "conversationHistory": [],
    "sessionId": "test_123",
    "timestamp": "2024-12-15T10:00:00.000Z",
    "metadata": {}
  }'
```

### 2. Expected Response

```json
{
  "response": "The VOLTIX Pro 10K is currently priced at $49.99, which is 28% off the original price of $69.99. That's a savings of $20!",
  "sessionId": "test_123"
}
```

### 3. Test in Browser Console

Open your website, open browser DevTools (F12), and run:

```javascript
fetch('YOUR_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userMessage: 'What colors is it available in?',
    systemMessage: 'You are VOLTIX Assistant.',
    conversationHistory: [],
    sessionId: 'test_' + Date.now(),
    timestamp: new Date().toISOString(),
    metadata: {}
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

---

## Troubleshooting

### Common Issues

#### CORS Errors
If you see CORS errors in the browser console:

1. In n8n, go to Settings → Configuration
2. Enable CORS or add your domain to allowed origins
3. Or set up a proxy/middleware

#### 500 Internal Server Error
- Check n8n workflow execution logs
- Verify API keys are valid
- Ensure vector store is connected

#### Empty Responses
- Verify the response field name matches what chatbot expects
- Check AI Agent node output in n8n executions
- Ensure system message is being passed correctly

#### Slow Responses
- Optimize vector store queries (reduce Top K)
- Use faster AI model (gpt-4o-mini instead of gpt-4)
- Check n8n server resources

### Debug Mode

Add this to your chatbot for debugging:

```javascript
// In sendMessage function, after fetch:
console.log('Response:', data);
```

---

## Security Best Practices

1. **Use HTTPS** - Always use secure webhook URLs
2. **Rate Limiting** - Implement rate limiting in n8n or your proxy
3. **Input Validation** - Validate message content before processing
4. **API Key Protection** - Never expose API keys in frontend code
5. **Session Management** - Implement session timeouts

---

## Next Steps

After setup:

1. [ ] Test the complete flow end-to-end
2. [ ] Monitor n8n execution logs
3. [ ] Fine-tune AI responses based on user feedback
4. [ ] Add conversation analytics
5. [ ] Implement fallback to human support

---

## Support

For issues with:
- **n8n**: [n8n Community Forum](https://community.n8n.io/)
- **OpenAI API**: [OpenAI Help Center](https://help.openai.com/)
- **This Integration**: Check the chatbot component code and this guide

---

*Document Version: 1.0 | Last Updated: December 2024*
