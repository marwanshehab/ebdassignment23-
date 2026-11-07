// Checkpoint A — your work goes in this file.

import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Load all orders from the database
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Return only paid orders from Giza
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Giza" && order.status === "paid"
  );
}

// 3. Calculate total revenue
export function summarize(orders) {
  return orders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );
}

// 4. Find an order and describe it, or return an error message
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch {
    return `Order ${id} not found`;
  }
}

// 5. Convert orders to JSON, keeping only student and item
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map(({ student, item }) => ({ student, item }))
  );
}