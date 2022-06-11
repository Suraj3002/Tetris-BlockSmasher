import React , {useState} from 'react'
import Sound from "react-sound";
import music from '../song/tetris-music.mp3';


const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
   
    <div>
        <button onClick={()=> setIsPlaying(!isPlaying)}>
            {!isPlaying? 'Play' : 'Stop'}
        </button>
      <Sound
        url={music}
        playStatus={isPlaying ? Sound.status.PlAYING : Sound.status.STOPPED}

        playFromPosition={300}
      />
    </div>
  );
};

export default Music