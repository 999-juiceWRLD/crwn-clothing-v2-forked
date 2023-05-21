# Nested Routes Experimental Branch

Title says it all. Created a new folder called `shop` and a component `shop.component.jsx`. I will put `shop` into `/home` page, therefore it will be nested and can be reached as `home/shop`.

- Although the route is settled, there's a variety of reasons that still `/home` page renders in `/home/shop`. First, the parental component `/home` still renders. Second, we haven't told actually told our code where we want this matching slash `<Shop />` component to go.

- The way we handle this is, we actually have to go into the parent level component `<Home />`, and tell where exactly `react-router-dom` to render this nested matching element `/home/shop/`.

- The component in `react-router-dom` used to handle this situation is called `Outlet`.
