import { CiSearch } from 'react-icons/ci';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { IoReturnDownBack } from 'react-icons/io5';
import { useRef, useState, useEffect } from 'react';
import { FiArrowUp, FiArrowDown, FiArrowLeft } from 'react-icons/fi';

import './App.scss';
import './reset.scss';
import wallpaper from './assets/wallpaper.jpg';
import { KeyboardKey, useKeyPress } from './hooks/useKeyDown';

function App() {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [suggestionView, setSuggestionView] = useState('NO_TAG');
  const inputRef = useRef(null);

  useEffect(() => {
    focused && inputRef.current.focus();
    focused && setSuggestionView('SUGGESTIONS');
    // focused && setSuggestionView('NO_TAG');
    !focused && setSuggestionView(null);
  }, [focused]);

  useKeyPress(() => {
    handleKeyDown();
  }, [KeyboardKey.dot]);

  const focus = () => {
    setFocused(true);
  };

  const handleKeyDown = (event) => {
    focus();
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <img className={'wallpaper'} src={wallpaper} />
      {true && (
        <div className={'spotlight'}>
          <div className={`search-box-container ${focused ? 'search-focused' : null}`}>
            <div className={'search-box'}>
              <CiSearch className="icon" />
              {focused && <span className={'command'}>⌘</span>}
              <input
                ref={inputRef}
                placeholder={'Type a command or search'}
                onFocus={(e) => {
                  setFocused(true);
                  e.target.value.toLowerCase() === 'u' && setSuggestionView('NO_TAG');
                }}
                onBlur={() => {
                  setFocused(false);
                }}
                value={inputValue}
                onChange={(e) => {
                  console.log('e: ', e.target.value);
                  setInputValue(e.target.value);
                  if (e.target.value.toLowerCase() === 'u') {
                    setSuggestionView('NO_TAG');
                    return
                  }
                  setSuggestionView('SUGGESTIONS');
                }}
              />
              <span className={'command'}>⌘/</span>
            </div>
            {focused && (
              <>
                <div className={'suggestions-container'}>
                  {suggestionView === 'SUGGESTIONS' && (
                    <>
                      <div className={'suggestion'}>
                        <div className={'suggestion-content'}>
                          {/* Icon */}
                          <span className={'suggestion-icon'}>#</span>
                          {/* Text */}
                          <span className={'suggestion-text'}>Add tag</span>
                        </div>
                        {/* Shortcut */}
                        <span className={'command'}>⌘T</span>

                        {/* Icon */}
                      </div>
                      <div className={'suggestion'}>
                        <div className={'suggestion-content'}>
                          {/* Icon */}
                          <span className={'suggestion-icon'}>
                            <AiOutlineUserAdd />
                          </span>
                          {/* Text */}
                          <span className={'suggestion-text'}>Add tag</span>
                        </div>
                        {/* Shortcut */}
                        <span className={'command'}>⌘T</span>

                        {/* Icon */}
                      </div>
                    </>
                  )}
                  {suggestionView === 'NO_TAG' && (
                    <>
                      <div className={'no-tag-container'}>
                        <div className={'center-icon'}>
                          <div className={'suggestion-icon'}>
                          <span className={'command circle-ripple'}>⌘</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className={'suggestion-footer'}>
                  <div className={'command-container'}>
                    <span className={'command'}>
                      <FiArrowUp />
                    </span>
                    <span className={'command-help'}>tags</span>
                  </div>
                  <div className={'command-container'}>
                    <span className={'command'}>
                      <FiArrowUp />
                    </span>
                    <span className={'command'}>
                      <FiArrowDown />
                    </span>
                    <span className={'command-help'}>navigate</span>
                  </div>
                  <div className={'command-container'}>
                    <span className={'command'}>
                      <IoReturnDownBack />
                    </span>
                    <span className={'command-help'}>open</span>
                  </div>
                  <div className={'command-container'}>
                    <span className={'command'}>
                      <FiArrowLeft />
                    </span>
                    <span className={'command-help'}>parent</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <div className='help'>Press "." to focus and "u" for ripple view</div>
    </div>
  );
}

export default App;
