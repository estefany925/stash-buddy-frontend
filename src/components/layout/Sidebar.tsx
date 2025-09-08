import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  FolderOpen, 
  Truck, 
  BarChart3, 
  Settings,
  Tags,
  ShoppingCart
} from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/", active: true },
  { icon: Package, label: "Productos", href: "/productos" },
  { icon: FolderOpen, label: "Categorías", href: "/categorias" },
  { icon: Truck, label: "Proveedores", href: "/proveedores" },
  { icon: ShoppingCart, label: "Órdenes", href: "/ordenes" },
  { icon: Users, label: "Usuarios", href: "/usuarios" },
  { icon: BarChart3, label: "Reportes", href: "/reportes" },
  { icon: Tags, label: "Etiquetas", href: "/etiquetas" },
  { icon: Settings, label: "Configuración", href: "/configuracion" },
];

export function Sidebar({ className }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("/");

  return (
    <div className={cn(
      "flex h-screen w-64 flex-col bg-sidebar border-r border-sidebar-border",
      className
    )}>
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-sidebar-border">
        <div className="flex items-center justify-center w-10 h-10 bg-sidebar-primary rounded-lg">
          <Package className="w-6 h-6 text-sidebar-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-sidebar-foreground">InventoryPro</h1>
          <p className="text-sm text-sidebar-foreground/70">Sistema de Gestión</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.href;
          
          return (
            <button
              key={item.href}
              onClick={() => setActiveItem(item.href)}
              className={cn(
                "flex items-center gap-3 w-full px-4 py-3 text-left rounded-lg transition-all duration-200",
                isActive 
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md" 
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-sidebar-primary rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-sidebar-primary-foreground">A</span>
          </div>
          <div className="text-sm">
            <p className="font-medium text-sidebar-foreground">Admin</p>
            <p className="text-sidebar-foreground/70">admin@inventorypro.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}