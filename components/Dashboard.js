const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Today's Workout</h2>
            <p>Your scheduled workout for today will appear here.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Start Workout</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Weekly Progress</h2>
            <p>A summary of your weekly stats will be displayed here.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Recommended for You</h2>
            <p>New exercises and routines will be suggested here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
