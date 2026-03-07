import React, { useState } from 'react';
import svgPaths from "../../imports/svg-78otquld5h";

import { imgStarColor } from "../../imports/svg-nvm9s";
import Header from "../components/Header";
import Footer from "../components/Footer";

// extracted styles object moved to separate file for readability
import styles from './CourseDetail.styles';

const randomInstructorImg = "https://picsum.photos/200/200?random=1";
const randomCourseImg = "https://picsum.photos/400/250?random=2";

// style that depends on imported image path
const starHalfFillStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '50%',
  height: '100%',
  backgroundColor: '#ffc500',
  maskImage: `url('${imgStarColor}')`,
  maskSize: '18px 17.193px',
  maskRepeat: 'no-repeat',
  maskPosition: '0px 0px',
};

const MainBody = () => {
  // State for toggling course content sections
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  // Helper for rendering stars
  const renderStars = (rating) => {
    return [1, 2, 3, 4, 5].map((star) => {
      if (star <= Math.floor(rating)) {
        return (
          <svg key={star} style={styles.starFull} fill="none" viewBox="0 0 18 17.1927">
            <path d={svgPaths.p46fad00} fill="#FFC500" />
          </svg>
        );
      }
      // Simplified half-star logic for the demo
      return (
        <svg key={star} style={styles.starEmpty} fill="none" viewBox="0 0 18 17.1927">
          <path d={svgPaths.p46fad00} fill="#E0E8F1" />
        </svg>
      );
    });
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.breadcrumb}>IT & Software &gt; Network & Security &gt; Kubernetes</div>
          
          <h1 style={styles.heroTitle}>Introduction to Kubernetes</h1>
          <p style={styles.heroSubtitle}>
            Want to learn Kubernetes? Get an in-depth primer on this powerful system for managing containerized applications in this free course.
          </p>
          
          <div style={styles.heroBadges}>
            <div style={styles.bestSellerBadge}>
              <div style={styles.badgeIcon}>
                <svg fill="none" viewBox="0 0 20 19" style={styles.starIcon}>
                  <path d={svgPaths.p277b7b30} fill="#4A4459" />
                </svg>
              </div>
              <span style={styles.badgeText}>Best Seller</span>
            </div>
            <div style={styles.createdBy}>
              <span style={styles.createdByLabel}>Created by</span>
              <span style={styles.createdByName}>Spoongebob</span>
            </div>
          </div>

          <div style={styles.heroMeta}>
            <div style={styles.metaItem}>
              <svg style={styles.metaIcon} fill="none" viewBox="0 0 24 24"><path d={svgPaths.p6ddf300} fill="#9FC3CE" /></svg>
              <span style={styles.metaText}>Updated 12/2025</span>
            </div>
            <div style={styles.metaItem}>
              <svg style={styles.metaIcon} fill="none" viewBox="0 0 20 20"><path d={svgPaths.p3df1ee00} fill="#9FC3CE" /></svg>
              <span style={styles.metaText}>English</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Layout */}
      <div style={styles.layoutWrapper}>
        <main style={styles.mainContent}>
          
          {/* Rating Card (Floating) */}
          <div style={styles.ratingCard}>
            <div style={styles.verifiedBadge}>
              <svg style={styles.verifiedIcon} fill="none" viewBox="0 0 22 22"><path d={svgPaths.p13300500} stroke="white" /></svg>
              <span style={styles.verifiedText}>Verified</span>
            </div>
            
            <div style={styles.ratingSection}>
              <div style={styles.ratingScore}>4.5</div>
              <div style={styles.stars}>{renderStars(4.5)}</div>
              <div style={styles.ratingCount}>100,000 ratings</div>
            </div>
            
            <div style={styles.learnersSection}>
              <svg style={styles.usersIcon} fill="none" viewBox="0 0 31 26"><path d={svgPaths.paaca4c0} stroke="#1E1E1E" strokeWidth="3.5" /></svg>
              <div style={styles.learnersCount}>400,000</div>
              <div style={styles.learnersLabel}>learners</div>
            </div>
          </div>

          {/* What you'll learn */}
          <section style={styles.learnBox}>
            <h2 style={styles.learnTitle}>What you'll learn</h2>
            <div style={styles.learnGrid}>
              {Array(6).fill('Gain basic understanding of Kubernetes Fundamentals').map((text, i) => (
                <div key={i} style={styles.learnItem}>
                  <svg style={styles.checkIcon} fill="none" viewBox="0 0 17 12"><path d={svgPaths.p20166f70} fill="#889099" /></svg>
                  <span style={styles.learnText}>{text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Course Content Accordion */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Course content</h2>
            <div style={styles.contentList}>
              {[
                { title: 'Introduction', lectures: '6 lectures', duration: '7 min' },
                { title: 'Kubernetes Architecture', lectures: '12 lectures', duration: '45 min' },
                { title: 'Pods & Services', lectures: '10 lectures', duration: '30 min' },
                { title: 'Exam Preparation', lectures: '50 Questions', duration: '60 min' }
              ].map((item, i) => (
                <div key={i} style={styles.accordionItem}>
                  <div style={styles.contentHeader} onClick={() => toggleSection(i)}>
                    <svg style={{...styles.arrowIcon, transform: expandedSection === i ? 'rotate(180deg)' : 'rotate(0deg)'}} fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p39dcce80} fill="black" />
                    </svg>
                    <span style={styles.contentTitle}>{item.title}</span>
                    <span style={styles.contentMetaText}>{item.lectures} • {item.duration}</span>
                  </div>
                  {expandedSection === i && (
                    <div style={styles.accordionBody}>
                      <p style={styles.detailText}>Lecture details and preview videos would go here.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Instructor Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Instructors</h2>
            <div style={styles.instructorCard}>
              <img src={randomInstructorImg} alt="Instructor" style={styles.instructorImage} />
              <div style={styles.instructorDetails}>
                <h3 style={styles.instructorName}>Spongebob Squarepants</h3>
                <div style={styles.instructorStat}>4.9 Instructor Rating</div>
                <div style={styles.instructorStat}>430,393 Reviews</div>
              </div>
            </div>
          </section>
        </main>

        {/* Sticky Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.infoCard}>
            <img src={randomCourseImg} alt="Kubernetes" style={styles.courseImage} />
            <div style={styles.priceContainer}>
              <div style={styles.priceInfo}>
                <div style={styles.priceAmount}>$20</div>
                <div style={styles.priceLabel}>Full Course + Exam</div>
              </div>
              <button style={styles.buyNowBtn} onClick={() => alert('Added to cart!')}>BUY NOW</button>
            </div>
            <div style={styles.infoList}>
              <div style={styles.infoItem}>✓ Beginner Level</div>
              <div style={styles.infoItem}>✓ 12 Months Access</div>
              <div style={styles.infoItem}>✓ Certificate of Completion</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};


const CourseDetail = () => {
  return (
    <>
      <Header />
      <MainBody />
      <Footer />
    </>
  );
};

// styles moved to CourseDetail.styles.js
export default CourseDetail;
