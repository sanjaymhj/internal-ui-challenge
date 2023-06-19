import { CiSearch } from 'react-icons/ci';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { IoReturnDownBack } from 'react-icons/io5';
import { CgHashtag } from 'react-icons/cg';
import { useRef, useState, useEffect } from 'react';
import { FiArrowUp, FiArrowDown, FiArrowLeft } from 'react-icons/fi';

import './WeekOne.scss';
import { KeyboardKey, useKeyPress } from '../hooks/useKeyDown';

const NO_TAG_TEXT = 'untitled';

const SUGGESTIONS = 'SUGGESTIONS';
const NO_TAG = 'NO_TAG';

function WeekOne() {
  const [focused, setFocused] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [suggestionView, setSuggestionView] = useState(SUGGESTIONS);
  const inputRef = useRef(null);

  useEffect(() => {
    focused && inputRef.current.focus();
  }, [focused]);

  useKeyPress(() => {
    handleKeyDown();
  }, [KeyboardKey.dot]);

  const focus = () => {
    setFocused(true);

    inputValue === NO_TAG_TEXT && setSuggestionView(NO_TAG);
  };

  const handleKeyDown = (event) => {
    focus();
  };

  return (
    focused && (
      <div className={'main-container'} onKeyDown={handleKeyDown}>
        {/* <img className="wallpaper" src={wallpaper} /> */}
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
                  e.target.value.toLowerCase() === NO_TAG_TEXT && setSuggestionView(NO_TAG);
                }}
                // onBlur={() => {
                //   setFocused(false);
                // }}
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  if (e.target.value.toLowerCase() === NO_TAG_TEXT) {
                    setSuggestionView(NO_TAG);
                    return;
                  }
                  setSuggestionView(SUGGESTIONS);
                }}
              />
              <span className={'command'}>⌘/</span>
            </div>
            {focused && (
              <>
                <div className={'suggestions-container'}>
                  {suggestionView === SUGGESTIONS && (
                    <>
                      <div className={'suggestion'}>
                        <div className={'suggestion-content'}>
                          {/* Icon */}
                          <span className={'suggestion-icon'}>
                            <CgHashtag />
                          </span>
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
                  {suggestionView === NO_TAG && (
                    <>
                      <div className={'no-tag-container'}>
                        <div className={'center-icon'}>
                          {/* <div className={'suggestion-icon'}> */}
                          <span className={'command circle-ripple'}>⌘</span>
                          {/* </div> */}
                        </div>
                        <div className={'center-content'}>
                          <div className={'suggestion-title'}>No tags found</div>
                          <div className={'suggestion-subtitle'}>
                            "{inputValue}" did not match any tags current used in projects. Please try again or{' '}
                            <span className={'underlined'}>create a new tag</span>.
                          </div>
                          <div className={'suggestion-subtitle'}>
                            <div className={'command'}>Clear Search</div>
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
        <div className="help">Press "." to focus and "{NO_TAG_TEXT}" for ripple view</div>
      </div>
    )
  );
}

export { WeekOne };
