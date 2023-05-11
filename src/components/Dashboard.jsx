import { Sidebar } from "flowbite-react"


export default function Dashboard() {
  return (
      <div className="w-fit h-screen">
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="#"
                // icon={HiChartPie}
              >
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                // icon={HiUser}
              >
                Users
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                // icon={HiShoppingBag}
              >
                Products
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                // icon={HiUser}
              >
                Sales
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                // icon={HiShoppingBag}
              >
                Estatistics
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                // icon={HiViewBoards}
                label="Pro"
                labelColor="alternative"
              >
                Customers
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
  );
}
