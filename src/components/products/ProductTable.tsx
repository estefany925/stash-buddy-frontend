import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Eye } from "lucide-react";

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive' | 'low_stock';
  supplier: string;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "MacBook Pro M3",
    sku: "MBP-M3-14",
    category: "Laptops",
    price: 2999.99,
    stock: 15,
    status: "active",
    supplier: "Apple Inc."
  },
  {
    id: "2",
    name: "iPhone 15 Pro",
    sku: "IP15-PRO-128",
    category: "Smartphones",
    price: 1199.99,
    stock: 5,
    status: "low_stock",
    supplier: "Apple Inc."
  },
  {
    id: "3",
    name: "Samsung Galaxy S24",
    sku: "SGS24-256",
    category: "Smartphones",
    price: 899.99,
    stock: 0,
    status: "inactive",
    supplier: "Samsung"
  },
  {
    id: "4",
    name: "Dell XPS 13",
    sku: "DELL-XPS13",
    category: "Laptops",
    price: 1599.99,
    stock: 22,
    status: "active",
    supplier: "Dell Technologies"
  }
];

const getStatusBadge = (status: Product['status']) => {
  switch (status) {
    case 'active':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Activo</Badge>;
    case 'inactive':
      return <Badge variant="secondary">Inactivo</Badge>;
    case 'low_stock':
      return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Stock Bajo</Badge>;
    default:
      return <Badge variant="secondary">Desconocido</Badge>;
  }
};

export function ProductTable() {
  return (
    <Card className="shadow-card">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border">
              <TableHead className="font-semibold text-card-foreground">Producto</TableHead>
              <TableHead className="font-semibold text-card-foreground">SKU</TableHead>
              <TableHead className="font-semibold text-card-foreground">Categoría</TableHead>
              <TableHead className="font-semibold text-card-foreground">Precio</TableHead>
              <TableHead className="font-semibold text-card-foreground">Stock</TableHead>
              <TableHead className="font-semibold text-card-foreground">Estado</TableHead>
              <TableHead className="font-semibold text-card-foreground">Proveedor</TableHead>
              <TableHead className="font-semibold text-card-foreground text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockProducts.map((product) => (
              <TableRow key={product.id} className="hover:bg-muted/50 transition-colors">
                <TableCell className="font-medium text-card-foreground">{product.name}</TableCell>
                <TableCell className="text-muted-foreground">{product.sku}</TableCell>
                <TableCell className="text-muted-foreground">{product.category}</TableCell>
                <TableCell className="text-card-foreground font-semibold">
                  ${product.price.toLocaleString()}
                </TableCell>
                <TableCell className="text-muted-foreground">{product.stock}</TableCell>
                <TableCell>{getStatusBadge(product.status)}</TableCell>
                <TableCell className="text-muted-foreground">{product.supplier}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}