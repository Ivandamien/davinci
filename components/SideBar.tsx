"use client";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import React from "react";
import NewChat from "./NewChat";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
    query(
      collection(db, "users", session.user?.email!,
        "chats"),
    orderBy("createdAt","asc"))
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/*Newchat  */}
          <NewChat />

          <div className="hidden sm:inline">
          <ModelSelection />
          </div>

          <div className="mt-2 flex flex-col space-y-2 ">
            {/* Map through the chatRows */}
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
           
</div>


        </div>
      </div>

      {session && (
        <img
          src={session.user?.image!}
          alt="profile picture"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
      <button
        onClick={() => signOut()}
        className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-50"
      >
        Logout
      </button>
    </div>
  );
}

export default SideBar;
