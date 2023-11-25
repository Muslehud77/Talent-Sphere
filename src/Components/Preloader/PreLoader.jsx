import video from '../../Assets/preloader/preloader.mp4'

import ReactPlayer from 'react-player';

const PreLoader = () => {
     
    return (
      <div className="fixed bg-black h-screen z-50 w-screen top-0">
        <ReactPlayer
          url={video}
          width="100%"
          height="100%"
          loop={true}
          playing={true}
          muted={true}
        />
      </div>
    );
};

export default PreLoader;