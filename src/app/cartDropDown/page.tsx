"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CartDropdown() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Function to add items to the cart
  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Function to update the quantity of an item
  const updateQuantity = (id: string, increment: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (

      <Card className="fixed top-0 right-0 w-[417px] max-w-sm h-[746px] max-h-[90vh] bg-white shadow-lg z-50 p-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <Separator className="mb-4" />

        {/* Cart Items */}
        <div className="flex-grow overflow-auto space-y-4 pr-2">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Rs. {item.price.toLocaleString()}.00
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground">
              Your cart is empty.
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4">
          <Separator className="mb-4" />
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-medium">
                Rs. {subtotal.toLocaleString()}.00
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href="/cart">Cart</Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href="/checkout">Checkout</Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href="/productComparison">Comparison</Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
  );
}
