import video from '../../Assets/preloader/preloader.mp4'

import ReactPlayer from 'react-player';

const PreLoader = () => {
     
    return (
      <div className="fixed h-screen z-50 w-screen top-0">
        <ReactPlayer
          url={video}
          width="640"
          height="360"
          loop={true}
          playing={true}
          muted={true}
        />
      </div>
    );
};

export default PreLoader;