'use client';

import React from 'react';
import clsx from 'clsx';

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  active: boolean;
};

export default function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center text-xs transition',
        active ? 'text-white' : 'text-gray-500'
      )}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}
