import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, get, update } from "firebase/database";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  // ✅ Fetch Users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const snapshot = await get(ref(db, "users"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const usersArray = Object.entries(data).map(([uid, info]) => ({
            uid,
            ...info,
          }));
          setUsers(usersArray);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  // ✅ Fetch Contact Messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const snapshot = await get(ref(db, "messages"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const messagesArray = Object.entries(data).map(([id, info]) => ({
            id,
            ...info,
          }));
          setMessages(messagesArray);
        }
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };

    fetchMessages();
  }, []);

  // ✅ User Role Update
  const makeAdmin = async (uid) => {
    await update(ref(db, "users/" + uid), { role: "admin" });
    setUsers((prev) =>
      prev.map((u) => (u.uid === uid ? { ...u, role: "admin" } : u))
    );
  };

  const makeUser = async (uid) => {
    await update(ref(db, "users/" + uid), { role: "user" });
    setUsers((prev) =>
      prev.map((u) => (u.uid === uid ? { ...u, role: "user" } : u))
    );
  };

  return (
    <div className="page">
      <h2>👑 Admin Panel</h2>

      {/* ================= Users Section ================= */}
      <h3>👥 Manage Users</h3>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.uid}>
              <strong>{user.email}</strong> — Role:{" "}
              <span
                style={{
                  color: user.role === "admin" ? "green" : "blue",
                  fontWeight: "bold",
                }}
              >
                {user.role}
              </span>
              <div style={{ marginTop: "0.5rem" }}>
                {user.role !== "admin" && (
                  <button onClick={() => makeAdmin(user.uid)}>
                    Make Admin
                  </button>
                )}
                {user.role !== "user" && (
                  <button onClick={() => makeUser(user.uid)}>Make User</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* ================= Messages Section ================= */}
      <h3 style={{ marginTop: "2rem" }}>📩 Contact Messages</h3>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul>
          {messages.map((msg) => (
            <li key={msg.id} style={{ marginBottom: "1rem" }}>
              <strong>{msg.name}</strong> ({msg.email})<p>{msg.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
