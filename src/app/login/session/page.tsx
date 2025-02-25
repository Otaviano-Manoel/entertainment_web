"use client";
import { useClient } from "@/context/useClient";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Session = () => {
  const { data: session } = useSession();
  const { setClient } = useClient();
  const navigate = useRouter();

  useEffect(() => {
    if (!session) return;
    setClient({
      name: session.user!.name!,
      image: session.user!.image!,
      email: session.user!.image!,
      expire: session.expires,
    });

    navigate.push("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
};

export default Session;
