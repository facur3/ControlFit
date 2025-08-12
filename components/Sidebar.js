import Link from 'next/link';

const Sidebar = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-4">
        {/* Page content here */}
        {children}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li className="text-lg font-bold mb-4"><Link href="/">ControlFit</Link></li>
          <li><Link href="/">Dashboard</Link></li>
          <li><Link href="/workouts">Workouts</Link></li>
          <li><Link href="/exercises">Exercise Library</Link></li>
          <li><Link href="/progress">Progress</Link></li>
          <li><Link href="/community">Community</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;