import "./Preloader.css"

const Preloader = () => {
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      setVisible(true);
      return () => setVisible(false);
    }, []);
  
    return (
      <div className={`preloader ${visible ? 'visible' : ''}`}>
        <div className="spinner"></div>
      </div>
    );
  };

  export default Preloader;