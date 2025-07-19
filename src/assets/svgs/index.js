// Client Logo
import brand_logo from './logos/brand/tvcabo.svg';

// World Icons
import game_icon from './icons/worlds/game_icon.svg';
import movie_icon from './icons/worlds/movie_icon.svg';
import social_icon from './icons/worlds/social_icon.svg';
import sport_icon from './icons/worlds/sport_icon.svg';
import music_icon from './icons/worlds/music_icon.svg';
import startup_icon from './icons/worlds/startup_icon.svg';

// Worlds Logos
import games_world from './logos/worlds/games_world.svg';
import tv_shows_world from './logos/worlds/tv_shows_world.svg';
import social_media_world from './logos/worlds/social_media_world.svg';
import sports_world from './logos/worlds/sports_world.svg';
import music_world from './logos/worlds/music_world.svg';
import startups_world from './logos/worlds/startups_world.svg';

// random logos
import master_games from './logos/random/master_games.svg';
import by_tvcabo from './logos/random/by_tvcabo.svg';

const vectorImages = {
    icons: {
        game: {
            game_icon,
            movie_icon,
            social_icon,
            sport_icon,
            music_icon,
            startup_icon
        }
    },
    logos: {
        brand: {
            brand_logo
        },
        worlds: {
            games_world,
            tv_shows_world,
            social_media_world,
            sports_world,
            music_world,
            startups_world
        },
        random: {
            master_games,
            by_tvcabo
        }
    }
}

export { vectorImages }