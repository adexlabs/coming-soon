"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/ComingSoon.css";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      {/* Header Section with Logo */}
      <header className="header">
        <div className="header-layout">
        
        <Link href="/" className="logo">
            <Image
              src="/images/logo-image1.png"
              alt="Carbon Foot Print"
              title="Carbon Foot Print"
              width={120}
              height={50}
              priority
            />
          </Link>
        
      </div></header>
      

      {/* Main Content */}
      <main className="main-content">
        <h1>Coming Soon.</h1>
      </main>
    </div>
  );
};

export default ComingSoon;
