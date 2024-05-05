import React from "react";

const Bullet = () => {
  return (
    <div className="flex flex-col bullet">
      <ul className="flex flex-col gap-4">
        <li>Messages</li>
        <li>Help Center</li>
        <li>Settings</li>
        <li>Lockscreen</li>
        <li>Log out</li>
      </ul>
    </div>
  );
};

export default Bullet;
