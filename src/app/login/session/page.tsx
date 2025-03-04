"use client";
import { useClient } from "@/context/useClient";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Session = () => {
  const { data: session } = useSession();
  const { setClient } = useClient();
  const navigate = useRouter();

  useEffect(() => {
    if (!session) return;
    setClient({
      name: session.user!.name!,
      image: session.user!.image!,
      email: session.user!.email!,
      expire: session.expires,
    });

    navigate.push("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return null;
};

export default Session;
