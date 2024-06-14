import React, { useContext } from 'react'
import { assets} from '../assets/assets'
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import SpeakerIcon from '@mui/icons-material/Speaker';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import { PlayerContext } from '../context/PlayerContext';
import PauseIcon from '@mui/icons-material/Pause';

const Players = () => {

    const {track,seekBar, seekBg,playStatus, play, pause,time,previous,next,seekSong} = useContext(PlayerContext);

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4 '>
        <div className='hidden lg:flex items-center gap-3'>
            <img className='w-12 rounded-full' src={track.image} alt="" />
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,20)}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <ShuffleOutlinedIcon className='cursor-pointer '/>
                <SkipPreviousOutlinedIcon onClick={previous} className='cursor-pointer'/>
                {playStatus ? <PauseIcon className='cursor-pointer' onClick={pause}/> :  <PlayCircleFilledWhiteOutlinedIcon className='cursor-pointer' onClick={play}/>}
    
                <SkipNextOutlinedIcon onClick={next} className='cursor-pointer'/>
                <RepeatOutlinedIcon className='cursor-pointer'/>
            </div>
            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-green-400 rounded-full'/>
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        <div className='hidden lg:flex items-center opacity-75 gap-2 '>
            <PlayCircleOutlineOutlinedIcon/>
            <MicOutlinedIcon/>
            <QueueMusicOutlinedIcon/>
            <SpeakerIcon/>
            <img className='w-4' src={assets.volume_icon} alt="" />
            <div className='w-20 bg-slate-50 h-1 rounded '>

            </div>
            <img className='w-4' src={assets.mini_player_icon} alt="" />
            <ZoomInMapIcon/>
        </div>
      
    </div>
  )
}

export default Players
