'use client';

import { useRouter } from 'next/navigation';

type LinkButtonProps = {
  to: string;
  replace?: boolean;
  refresh?: boolean;
  children: React.ReactNode;
};

export default function LinkButton({
  to,
  replace,
  refresh,
  children,
}: LinkButtonProps) {
  const router = useRouter();

  const navigate = replace
    ? router.replace
    : refresh
    ? router.refresh
    : router.push;

  return (
    <button
      type="button"
      onClick={() => navigate(to)}
      className="flex-auto m-3"
    >
      {children}
    </button>
  );
}
