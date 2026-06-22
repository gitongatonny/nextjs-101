export default function ComplexDashboardLayout({
  //Props being passed (parallel routes)
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  //Types
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  //Simple auth check for login slot
  const isLoggedIn = true; //Set flase to show Login message - for testing/learning
  return isLoggedIn ? (
    //Layout with slots
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
