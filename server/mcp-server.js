const { MCPServer } = require("@modelcontextprotocol/sdk");
const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/db");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// MCPServer expects a data provider. We'll use Sequelize for MySQL
const mcpServer = new MCPServer({
  dataProvider: sequelize,
  // You can add more MCP config here if needed
});

// Attach MCP routes to Express
app.use("/mcp", mcpServer.router());

app.listen(port, () => {
  console.log(`MCP server running at http://localhost:${port}/mcp`);
});
