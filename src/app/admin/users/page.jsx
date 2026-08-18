"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaUsers, FaUserShield, FaUser, FaSearch } from "react-icons/fa";

const ADMIN_EMAILS = ["admin@gmail.com", "artistop26@gmail.com"];

export default function ManageUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      if (res.ok) {
        setUsers(data.users || []);
      }
    } catch (error) {
      console.error("Failed to fetch users", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Area */}
      <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center gap-4 bg-base-100 shadow-sm p-6 border border-base-200 rounded-3xl">
        <div>
          <h1 className="flex items-center gap-2 font-black text-2xl">
            <FaUsers className="text-primary" /> Manage Users
          </h1>
          <p className="mt-1 text-xs text-base-content/60">
            Total registered users: {users.length}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 rounded-2xl w-full font-semibold text-xs input input-bordered"
          />
          <FaSearch className="top-3.5 left-3.5 absolute text-xs text-base-content/40" />
        </div>
      </div>

      {/* Users Table Section */}
      <div className="bg-base-100 shadow-sm border border-base-200 rounded-3xl overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center p-12">
            <span className="text-primary loading loading-spinner loading-lg"></span>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="p-12 font-bold text-base-content/60 text-center">
            No users found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="bg-base-200/50 text-xs text-base-content/70">
                  <th>User Info</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Joined Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => {
                  const isAdmin = ADMIN_EMAILS.some(
                    (email) => email.trim().toLowerCase() === user.email?.trim().toLowerCase()
                  );

                  return (
                    <tr key={user._id} className="hover:bg-base-200/30 transition-colors">
                      {/* Avatar & Name */}
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="flex justify-center items-center bg-primary/10 border border-primary/20 rounded-full w-10 h-10 font-black text-primary">
                              {user.image ? (
                                <Image
                                  src={user.image}
                                  alt={user.name || "User"}
                                  width={40}
                                  height={40}
                                  className="rounded-full object-cover"
                                />
                              ) : (
                                <span>{user.name?.[0]?.toUpperCase() || "U"}</span>
                              )}
                            </div>
                          </div>
                          <div>
                            <p className="font-bold text-sm">{user.name || "N/A"}</p>
                          </div>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="font-semibold text-xs text-base-content/80">
                        {user.email}
                      </td>

                      {/* Role Badge */}
                      <td>
                        {isAdmin ? (
                          <span className="gap-1 px-3 py-2 font-bold text-[11px] text-white badge badge-primary">
                            <FaUserShield /> Admin
                          </span>
                        ) : (
                          <span className="gap-1 px-3 py-2 font-bold text-[11px] badge badge-ghost">
                            <FaUser /> Customer
                          </span>
                        )}
                      </td>

                      {/* Created Date */}
                      <td className="font-medium text-xs text-base-content/60">
                        {user.createdAt
                          ? new Date(user.createdAt).toLocaleDateString()
                          : "N/A"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}