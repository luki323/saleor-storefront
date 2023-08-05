// Using useContext in async components works until first await
// https://github.com/facebook/react/commit/7118f5dd7bf5f1c44d0d2944ef8ad58e423909ad
export {useLocale as getLocale} from '../locale-context';
