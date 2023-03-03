import React from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Courses from '../../components/courses/Courses';
import Rightbar from '../../components/rightbar/Rightbar';

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main className="main">
      <div className="container">
        <div className="mainWrapper">
      <Sidebar />
      <Courses />
      <Rightbar />
        </div>
      </div>
    </main>
    </>
  );
}
