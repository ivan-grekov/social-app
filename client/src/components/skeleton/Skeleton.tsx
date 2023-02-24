import React from 'react';
// @ts-ignore
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={864}
    height={667}
    viewBox="0 0 864 667"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="37" y="6" rx="3" ry="3" width="41" height="17" />
    <rect x="0" y="40" rx="3" ry="3" width="406" height="19" />
    <circle cx="13" cy="13" r="13" />
    <rect x="0" y="77" rx="0" ry="0" width="890" height="500" />
    <circle cx="12" cy="596" r="12" />
    <circle cx="42" cy="595" r="12" />
    <rect x="61" y="583" rx="0" ry="0" width="83" height="24" />
    <rect x="780" y="581" rx="0" ry="0" width="85" height="19" />
    <rect x="90" y="6" rx="0" ry="0" width="50" height="14" />
  </ContentLoader>
);

export default Skeleton;
