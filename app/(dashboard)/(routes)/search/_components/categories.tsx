"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
} from "react-icons/fc";
import { FaStethoscope, FaPalette, FaBook } from "react-icons/fa";
import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  Music: FcMusic,
  Photography: FcOldTimeCamera,
  Fitness: FcSportsMode,
  Accounting: FcSalesPerformance,
  "Computer Science": FcMultipleDevices,
  Filming: FcFilmReel,
  Engineering: FcEngineering,
  Medical: FaStethoscope,
  Art: FaPalette,
  "Exam Preps": FaBook,
};

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2">
      {items.map((item) => {
        const Icon = iconMap[item.name] || FaBook; // Default icon if not found
        return (
          <CategoryItem
            key={item.id}
            label={item.name}
            icon={Icon}
            value={item.id}
          />
        );
      })}
    </div>
  );
};
