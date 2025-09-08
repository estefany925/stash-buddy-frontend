import { Layout } from "@/components/layout/Layout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ProductTable } from "@/components/products/ProductTable";
import { Package, Users, ShoppingCart, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <Layout 
      title="Dashboard" 
      subtitle="Resumen general del inventario"
      showAddButton={true}
      onAddClick={() => console.log("Agregar producto")}
    >
      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Productos"
            value="1,245"
            icon={Package}
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Productos Activos"
            value="1,189"
            icon={TrendingUp}
            trend={{ value: 8, isPositive: true }}
          />
          <StatsCard
            title="Stock Bajo"
            value="56"
            icon={ShoppingCart}
            trend={{ value: -5, isPositive: false }}
          />
          <StatsCard
            title="Proveedores"
            value="23"
            icon={Users}
            trend={{ value: 3, isPositive: true }}
          />
        </div>

        {/* Products Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-card-foreground">Productos Recientes</h2>
            <p className="text-sm text-muted-foreground">Últimos productos agregados al inventario</p>
          </div>
          <ProductTable />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
