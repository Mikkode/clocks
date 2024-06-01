"use client";

import { useLocalStorage } from "usehooks-ts";
import { createContext, useContext, useState } from "react";

type City = {
  name: string;
  id: number;
};

type LocalStorageContext = {
  cities: City[];
  setCities: React.Dispatch<React.SetStateAction<City[]>>;
};

type LocalStorageProviderProps = {
  children: React.ReactNode;
};

export const LocalStorageContext = createContext<LocalStorageContext | null>(
  null
);

export default function LocalStorageProvider({
  children,
}: LocalStorageProviderProps) {
  const [cities, setCities, removeCities] = useLocalStorage<City[]>(
    "cities",
    []
  );

  console.log("LocalStorageContext");

  return (
    <LocalStorageContext.Provider
      value={{
        cities,
        setCities,
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
}

export function useLocalStorageContext() {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      "useLocalStorageContext must be used within a LocalStorageProvider"
    );
  }
  return context;
}
