import { type Product, type InsertProduct, type Order, type InsertOrder } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getAllProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createOrder(order: InsertOrder): Promise<Order>;
  getOrder(id: string): Promise<Order | undefined>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private orders: Map<string, Order>;

  constructor() {
    this.products = new Map();
    this.orders = new Map();
    this.initializeProducts();
  }

  private initializeProducts() {
    const sampleProducts: Product[] = [
      {
        id: "1",
        name: "Dragon Fruit",
        description: "Vibrant pink dragon fruit with sweet, refreshing white flesh speckled with tiny black seeds. Rich in antioxidants and vitamin C.",
        price: "280.00",
        image: "https://images.unsplash.com/photo-1620075135079-2c0e69b4e9c4?w=800&h=800&fit=crop&q=80",
        category: "exotic",
        inStock: true,
        unit: "kg",
      },
      {
        id: "2",
        name: "Rambutan",
        description: "Exotic Southeast Asian fruit with a hairy red exterior and sweet, juicy translucent flesh. A tropical delicacy bursting with flavor.",
        price: "320.00",
        image: "https://images.unsplash.com/photo-1625814653002-2e4f71d4e838?w=800&h=800&fit=crop&q=80",
        category: "exotic",
        inStock: true,
        unit: "kg",
      },
      {
        id: "3",
        name: "Fresh Blueberries",
        description: "Plump, sweet blueberries packed with antioxidants. Perfect for smoothies, baking, or eating fresh.",
        price: "450.00",
        image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800&h=800&fit=crop&q=80",
        category: "seasonal",
        inStock: true,
        unit: "kg",
      },
      {
        id: "4",
        name: "Premium Kiwi",
        description: "Tangy and sweet kiwi fruit with vibrant green flesh. Excellent source of vitamin C and dietary fiber.",
        price: "180.00",
        image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=800&h=800&fit=crop&q=80",
        category: "seasonal",
        inStock: true,
        unit: "kg",
      },
      {
        id: "5",
        name: "Hass Avocado",
        description: "Creamy, buttery avocados perfect for salads, toast, or guacamole. Rich in healthy fats and nutrients.",
        price: "220.00",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&h=800&fit=crop&q=80",
        category: "seasonal",
        inStock: true,
        unit: "kg",
      },
      {
        id: "6",
        name: "Passion Fruit",
        description: "Tropical passion fruit with intensely aromatic, sweet-tart pulp. Perfect for juices, desserts, and cocktails.",
        price: "380.00",
        image: "https://images.unsplash.com/photo-1597714026720-8f74c62310ba?w=800&h=800&fit=crop&q=80",
        category: "exotic",
        inStock: true,
        unit: "kg",
      },
      {
        id: "7",
        name: "Durian",
        description: "The king of fruits! Creamy, custard-like flesh with a unique flavor. A Southeast Asian delicacy for adventurous palates.",
        price: "850.00",
        image: "https://images.unsplash.com/photo-1580458148391-51dae4e2bc2c?w=800&h=800&fit=crop&q=80",
        category: "exotic",
        inStock: true,
        unit: "kg",
      },
      {
        id: "8",
        name: "Mangosteen",
        description: "Queen of fruits with delicate, sweet white segments. Prized for its exquisite flavor and smooth texture.",
        price: "420.00",
        image: "https://images.unsplash.com/photo-1605005209588-c69d5e93c743?w=800&h=800&fit=crop&q=80",
        category: "exotic",
        inStock: true,
        unit: "kg",
      },
      {
        id: "9",
        name: "Fresh Raspberries",
        description: "Delicate, sweet-tart raspberries bursting with flavor. Perfect for desserts, smoothies, or fresh eating.",
        price: "550.00",
        image: "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?w=800&h=800&fit=crop&q=80",
        category: "seasonal",
        inStock: true,
        unit: "kg",
      },
      {
        id: "10",
        name: "Longan",
        description: "Sweet, translucent flesh similar to lychee. Refreshing tropical fruit with a subtle, delicate flavor.",
        price: "290.00",
        image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=800&h=800&fit=crop&q=80",
        category: "exotic",
        inStock: true,
        unit: "kg",
      },
      {
        id: "11",
        name: "Star Fruit",
        description: "Crisp, juicy star-shaped fruit with a sweet-tart flavor. Beautiful and delicious, perfect for garnishes and eating fresh.",
        price: "240.00",
        image: "https://images.unsplash.com/photo-1587132117370-ac6b99c65f8f?w=800&h=800&fit=crop&q=80",
        category: "exotic",
        inStock: true,
        unit: "kg",
      },
      {
        id: "12",
        name: "Fresh Strawberries",
        description: "Sweet, juicy strawberries at peak ripeness. Versatile fruit perfect for any occasion.",
        price: "380.00",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&h=800&fit=crop&q=80",
        category: "seasonal",
        inStock: true,
        unit: "kg",
      },
    ];

    sampleProducts.forEach((product) => {
      this.products.set(product.id, product);
    });
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = randomUUID();
    const order: Order = {
      ...insertOrder,
      id,
      createdAt: new Date().toISOString(),
    };
    this.orders.set(id, order);
    return order;
  }

  async getOrder(id: string): Promise<Order | undefined> {
    return this.orders.get(id);
  }
}

export const storage = new MemStorage();
