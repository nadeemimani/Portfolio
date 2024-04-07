export default function Icon({ className, color = 'white', iconType }) {
  const Arrow = () => (
    <path
    className={`stroke-current ${color}`} 
    strokeWidth="1"
    d="M5 12h14M12
    19l7-7-7-7" />
  );

  const Design = () => (
    <path
    d="M12.5,3.8C11.4,3,9.8,3.7,9.7,5.1L9.5,7.5h2.7c0.4,0,0.8,0.3,0.8,0.8C13,8.7,12.7,9,12.2,9H9.4l-0.6,9
    c-0.2,2.7-3.4,4-5.4,2.2l-0.2-0.2c-0.3-0.3-0.3-0.7-0.1-1.1c0.3-0.3,0.7-0.3,1.1-0.1l0.2,0.2c1.1,1,2.8,0.2,2.9-1.2L7.9,9H5.8
    C5.3,9,5,8.7,5,8.2c0-0.4,0.3-0.8,0.8-0.8H8L8.2,5c0.2-2.6,3.1-3.9,5.2-2.4l0.4,0.3c0.3,0.2,0.4,0.7,0.2,1c-0.2,0.3-0.7,0.4-1,0.2
    L12.5,3.8z
    M13.7,12.8c-0.2-0.4-0.8-0.5-1.2-0.2l-0.3,0.3c-0.3,0.3-0.8,0.2-1.1-0.1c-0.3-0.3-0.2-0.8,0.1-1.1l0.3-0.3
    c1.1-0.9,2.8-0.6,3.5,0.7l1,1.9l2.7-2.7c0.3-0.3,0.8-0.3,1.1,0c0.3,0.3,0.3,0.8,0,1.1l-3,3l1.5,2.9c0.2,0.4,0.8,0.5,1.2,0.2l0.3-0.3
    c0.3-0.3,0.8-0.2,1.1,0.1c0.3,0.3,0.2,0.8-0.1,1.1l-0.3,0.3c-1.1,0.9-2.8,0.6-3.5-0.7l-1.3-2.5l-3.4,3.4c-0.3,0.3-0.8,0.3-1.1,0
    s-0.3-0.8,0-1.1l3.7-3.7L13.7,12.8z" />
  );


  const Marketing = () => (
    <path
    d="M10.2,4.2C10.7,4.2,11,4.6,11,5v8h8c0.4,0,0.7,0.3,0.7,0.6l0,0.1c0,5-4,8.5-9,8.5c-5,0-9-4-9-9
    C1.8,8.3,5.3,4.2,10.2,4.2z M9.5,5.8l-0.2,0c-3.7,0.5-6,3.6-6,7.4c0,4.1,3.4,7.5,7.5,7.5c3.8,0,7-2.4,7.4-6l0-0.2h-8
    c-0.4,0-0.7-0.3-0.7-0.6l0-0.1V5.8z M13.2,1.8c5,0,9,4,9,9c0,0.4-0.3,0.8-0.8,0.8h-8.2c-0.4,0-0.8-0.3-0.8-0.8V2.5
    C12.5,2.1,12.8,1.8,13.2,1.8z M14,3.3V10h6.7l0-0.2c-0.4-3.4-3.1-6-6.5-6.5L14,3.3z" />
  );


  const Development = () => (
    <path
    d="M19.2,11c1,0,1.8,0.8,1.8,1.8v6.5c0,1-0.8,1.8-1.8,1.8h-4.5c-1,0-1.8-0.8-1.8-1.8v-6.5c0-1,0.8-1.8,1.8-1.8
    H19.2z M9.3,15c1,0,1.8,0.8,1.8,1.7v2.5c0,1-0.8,1.8-1.8,1.8H4.8c-1,0-1.8-0.8-1.8-1.8v-2.5c0-1,0.8-1.7,1.8-1.7H9.3z M19.2,12.5
    h-4.5c-0.1,0-0.2,0.1-0.2,0.2v6.5c0,0.1,0.1,0.2,0.2,0.2h4.5c0.1,0,0.2-0.1,0.2-0.2v-6.5C19.5,12.6,19.4,12.5,19.2,12.5z M9.3,16.5
    H4.8c-0.1,0-0.2,0.1-0.2,0.2v2.5c0,0.1,0.1,0.2,0.2,0.2h4.5c0.1,0,0.2-0.1,0.2-0.2v-2.5C9.5,16.6,9.4,16.5,9.3,16.5z M9.3,3
    c1,0,1.8,0.8,1.8,1.8v6.5c0,0.9-0.7,1.7-1.6,1.7l-0.1,0H4.8c-1,0-1.8-0.8-1.8-1.8V4.8C3,3.8,3.8,3,4.8,3H9.3z M9.3,4.5H4.8
    c-0.1,0-0.2,0.1-0.2,0.2v6.5c0,0.1,0.1,0.2,0.2,0.2h4.5l0.1,0c0.1,0,0.2-0.1,0.2-0.2V4.8C9.5,4.6,9.4,4.5,9.3,4.5z M19.2,3
    c1,0,1.8,0.8,1.8,1.8v2.5c0,1-0.8,1.8-1.8,1.8h-4.5c-1,0-1.8-0.8-1.8-1.8V4.8c0-1,0.8-1.8,1.8-1.8H19.2z M14.8,4.5
    c-0.1,0-0.2,0.1-0.2,0.2v2.5c0,0.1,0.1,0.2,0.2,0.2h4.5c0.1,0,0.2-0.1,0.2-0.2V4.8c0-0.1-0.1-0.2-0.2-0.2H14.8z" />
  );


  const Consulting = () => (
    <path
    d="M8.1,6.3C8.6,6.1,9,6,9.5,6c0.5,0,1.1,0.2,1.6,0.6C11.6,7,12,7.7,12,8.5c0,1-0.7,1.5-1.1,1.8c0,0-0.1,0-0.1,0.1
    c-0.4,0.3-0.6,0.5-0.6,0.9c0,0.4-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8c0-1.1,0.7-1.7,1.2-2.1c0.5-0.4,0.6-0.5,0.6-0.7
    c0-0.4-0.1-0.6-0.3-0.8C10,7.6,9.7,7.5,9.5,7.5c-0.3,0-0.5,0-0.6,0.1C8.7,7.7,8.6,7.8,8.4,8.1c-0.2,0.4-0.7,0.5-1,0.3
    C7,8.2,6.9,7.8,7.1,7.4C7.4,6.9,7.7,6.5,8.1,6.3z
    M9.5,15c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1C8.5,14.6,8.9,15,9.5,15z
    M9.5,3C5.4,3,2,6.4,2,10.5c0,1.1,0.3,2.2,0.7,3.2c-0.3,1-0.5,2.1-0.7,2.8c-0.2,0.9,0.6,1.7,1.5,1.5
    c0.8-0.2,1.9-0.5,2.9-0.7c0.9,0.4,2,0.7,3.1,0.7c4.1,0,7.5-3.4,7.5-7.5C17,6.4,13.6,3,9.5,3z M3.5,10.5c0-3.3,2.7-6,6-6
    c3.3,0,6,2.7,6,6c0,3.3-2.7,6-6,6c-1,0-1.9-0.2-2.7-0.6l-0.2-0.1l-0.3,0.1c-0.9,0.2-2,0.5-2.8,0.7c0.2-0.8,0.5-1.8,0.7-2.7l0.1-0.3
    l-0.1-0.3C3.7,12.4,3.5,11.5,3.5,10.5z
    M14.5,21c-2,0-3.8-0.8-5.1-2c0,0,0.1,0,0.1,0c0.7,0,1.4-0.1,2.1-0.3c0.9,0.5,1.9,0.8,2.9,0.8
    c1,0,1.9-0.2,2.7-0.6l0.2-0.1l0.3,0.1c0.9,0.2,2,0.4,2.7,0.6c-0.2-0.8-0.4-1.8-0.6-2.7l-0.1-0.3l0.1-0.3c0.4-0.8,0.7-1.8,0.7-2.7
    c0-2.1-1.1-4-2.7-5c-0.2-0.7-0.4-1.4-0.8-2c2.9,1,5,3.8,5,7.1c0,1.1-0.3,2.2-0.7,3.2c0.3,1,0.5,2.1,0.7,2.8c0.2,0.9-0.6,1.7-1.5,1.5
    c-0.7-0.2-1.9-0.4-2.9-0.6C16.6,20.8,15.6,21,14.5,21z" />
  );


  const Portfolio = () => (
    <path
    d="M5.6,2.1C5.8,2.2,6,2.5,6,2.8c0,0.8,0.3,1.3,0.7,1.9l0,0c0.3,0.5,0.8,1.1,0.8,2.1C7.5,7.7,7,8.5,6.3,9
    c0.2,0.2,0.4,0.4,0.5,0.6c0.5,0.8,0.7,1.9,0.7,3.6c0,1.7-0.2,3.8-0.6,5.4c-0.2,0.8-0.4,1.6-0.7,2.1c-0.1,0.3-0.3,0.6-0.5,0.8
    C5.5,21.8,5.2,22,4.8,22S4,21.8,3.8,21.6c-0.2-0.2-0.4-0.5-0.5-0.8c-0.3-0.6-0.5-1.3-0.7-2.1C2.2,17,2,15,2,13.3
    c0-1.7,0.2-2.9,0.7-3.6C2.8,9.4,3,9.2,3.2,9C2.5,8.5,2,7.7,2,6.8c0-0.4,0-1,0.4-1.8c0.4-0.8,1.1-1.7,2.4-2.8C5,2,5.3,1.9,5.6,2.1z
     M3.5,6.7L3.5,6.7C3.5,7.4,4.1,8,4.8,8S6,7.4,6,6.8C6,6.3,5.8,6,5.5,5.5l0,0C5.2,5.1,4.9,4.7,4.8,4.2c-0.5,0.6-0.8,1-1,1.4
    C3.5,6.1,3.5,6.5,3.5,6.7z M4,10.4c-0.2,0.4-0.5,1.2-0.5,2.8c0,1.6,0.2,3.5,0.6,5.1c0.2,0.8,0.4,1.4,0.6,1.8c0,0.1,0.1,0.1,0.1,0.2
    c0-0.1,0.1-0.1,0.1-0.2c0.2-0.4,0.4-1,0.6-1.8C5.8,16.8,6,14.9,6,13.3c0-1.6-0.2-2.4-0.5-2.8c-0.1-0.2-0.2-0.3-0.3-0.3
    C5.1,10,5,10,4.8,10s-0.3,0-0.5,0.1C4.2,10.1,4.1,10.2,4,10.4z
    M10,14.9c-0.5-0.1-1.1-0.3-1.5-0.5c0-0.4,0-0.8,0-1.2c0-0.2,0-0.3,0-0.5c0.5,0.3,1,0.5,1.5,0.7v-2.9
    C10,9.7,10.7,9,11.5,9h4c0-2.5-2-4.5-4.5-4.5c-1,0-2,0.3-2.7,0.9c-0.2-0.6-0.5-1-0.7-1.3l0-0.1C8.5,3.4,9.7,3,11,3c3.3,0,6,2.7,6,6
    h3.5c0.8,0,1.5,0.7,1.5,1.5v9c0,0.8-0.7,1.5-1.5,1.5h-9c-0.8,0-1.5-0.7-1.5-1.5V14.9z M11.5,15v4.5h9v-9h-3.7
    C16.2,12.9,14.1,14.8,11.5,15z M15.2,10.5h-3.7v3C13.2,13.3,14.7,12.1,15.2,10.5z" />
  );


  const Resume = () => (
    <path
    d="M3,6.2C3,4.5,4.5,3,6.2,3h11.5C19.5,3,21,4.5,21,6.2v11.5c0,1.8-1.5,3.2-3.2,3.2H6.2C4.5,21,3,19.5,3,17.8V6.2z
    M6.2,4.5c-1,0-1.8,0.8-1.8,1.8v11.5c0,1,0.8,1.8,1.8,1.8H9v-15H6.2z M10.5,4.5V14h9V6.2c0-1-0.8-1.8-1.8-1.8H10.5z M19.5,15.5h-9v4
   h7.2c1,0,1.8-0.8,1.8-1.8V15.5z" />
  );


  const Linkedin = () => (
    <path
    d="M12.5,3.8C11.4,3,9.8,3.7,9.7,5.1L9.5,7.5h2.7c0.4,0,0.8,0.3,0.8,0.8C13,8.7,12.7,9,12.2,9H9.4l-0.6,9
    c-0.2,2.7-3.4,4-5.4,2.2l-0.2-0.2c-0.3-0.3-0.3-0.7-0.1-1.1c0.3-0.3,0.7-0.3,1.1-0.1l0.2,0.2c1.1,1,2.8,0.2,2.9-1.2L7.9,9H5.8
    C5.3,9,5,8.7,5,8.2c0-0.4,0.3-0.8,0.8-0.8H8L8.2,5c0.2-2.6,3.1-3.9,5.2-2.4l0.4,0.3c0.3,0.2,0.4,0.7,0.2,1c-0.2,0.3-0.7,0.4-1,0.2
    L12.5,3.8z
    M13.7,12.8c-0.2-0.4-0.8-0.5-1.2-0.2l-0.3,0.3c-0.3,0.3-0.8,0.2-1.1-0.1c-0.3-0.3-0.2-0.8,0.1-1.1l0.3-0.3
    c1.1-0.9,2.8-0.6,3.5,0.7l1,1.9l2.7-2.7c0.3-0.3,0.8-0.3,1.1,0c0.3,0.3,0.3,0.8,0,1.1l-3,3l1.5,2.9c0.2,0.4,0.8,0.5,1.2,0.2l0.3-0.3
    c0.3-0.3,0.8-0.2,1.1,0.1c0.3,0.3,0.2,0.8-0.1,1.1l-0.3,0.3c-1.1,0.9-2.8,0.6-3.5-0.7l-1.3-2.5l-3.4,3.4c-0.3,0.3-0.8,0.3-1.1,0
    s-0.3-0.8,0-1.1l3.7-3.7L13.7,12.8z" />
  );


  const Contact = () => (
    <path
    d="M5.7,12L2.3,3.3c-0.2-0.6,0.4-1.2,0.9-1l0.1,0l18,9c0.5,0.3,0.6,1,0.1,1.3l-0.1,0.1l-18,9
    c-0.6,0.3-1.2-0.2-1.1-0.8l0-0.1L5.7,12L2.3,3.3L5.7,12z M4.4,4.5L7,11.2l6.6,0c0.4,0,0.7,0.3,0.7,0.6l0,0.1c0,0.4-0.3,0.7-0.6,0.7
    l-0.1,0l-6.6,0l-2.6,6.7L19.3,12L4.4,4.5z" />
  );


  const renderSvg = () => {
    switch (iconType) {
      case 'Arrow': return <Arrow />;
      case 'Design': return <Design />;
      case 'Marketing': return <Marketing />;
      case 'Development': return <Development />;
      case 'Consulting': return <Consulting />;
      case 'Portfolio': return <Portfolio />;
      case 'Resume': return <Resume />;
      case 'Linkedin': return <Linkedin />;
      case 'Contact': return <Contact />;

      default:
        return null; // Or some default SVG
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      className={className}
    >
      {renderSvg()}
    </svg>
  );
}

