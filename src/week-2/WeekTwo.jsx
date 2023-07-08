import { GrAdd } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';
import { SlLocationPin } from 'react-icons/sl';
import { FiSettings, FiArrowLeft, FiArrowRight, FiArrowUp, FiArrowDown } from 'react-icons/fi';

import './WeekTwo.scss';
import profileImage from './assets/profile.jpg';

function WeekTwo() {
  return (
    <div className="week-two">
      <div className={'main-title'}>
        <div className={'week-two-challenge-text-backdrop'}>Day 03</div>
        <div className={'week-two-challenge-text'}>03 Calendar</div>
      </div>

      <div className={'calendar-body'}>
        <div className={'left-panel'}>
          <div className={'profile-info'}>
            <img className={'profile-picture'} src={profileImage} />
            <div className={'profile-name'}>John Doe</div>
            <div className={'designation'}>UX Designer</div>
          </div>
          <div className={'scheduled'}>
            <div className={'scheduled-item'}>
              <div className={'scheduled-time'}>9:00 AM</div>
              <div className={'scheduled-title'}>Meeting with Ralph</div>
            </div>
            <div className={'scheduled-item'}>
              <div className={'scheduled-time'}>1:00 PM</div>
              <div className={'scheduled-title'}>Brunch with Kim</div>
              <div className={'scheduled-place'}>
                <GoLocation className={'location-pin'} />
                <div className={'location'}>Grand Central Station</div>
              </div>
            </div>
            <div className={'scheduled-item'}>
              <div className={'scheduled-time'}>9:00 AM</div>
              <div className={'scheduled-title'}>Meeting with Ralph</div>
            </div>
          </div>
          <div className={'actions'}>
            <FiSettings className={'settings'} />
            <div className={'events'}>
              <div className={'add'}>
                <GrAdd />
              </div>
            </div>
          </div>
        </div>
        <div className={'center-panel'}>
          <div className={'month-container'}>
            <div className={'previous-month'}>
              <FiArrowLeft className={'arrow-icon'} />
              <span>Feb</span>
            </div>
            <div className={'current-month'}>March</div>
            <div className={'next-month'}>
              <span>Apr</span>
              <FiArrowRight className={'arrow-icon'} />
            </div>
          </div>
          <div className={'week-container'}>
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>
          <div className={'month-dates'}>
            <div className={'week'}>
              <div className={'day'}>
                <span></span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span></span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span></span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>1</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>2</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>3</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>4</span>
                <div className={'indicator transparent'}></div>
              </div>
            </div>
            <div className={'week'}>
              <div className={'day'}>
                <span>5</span>
                <div className={'indicator red'}></div>
              </div>
              <div className={'day'}>
                <span>6</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>7</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>8</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>9</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>10</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>11</span>
                <div className={'indicator light-purple'}></div>
              </div>
            </div>
            <div className={'week'}>
              <div className={'day'}>
                <span>12</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>13</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>14</span>
                <div className={'indicator light-purple'}></div>
              </div>
              <div className={'day'}>
                <span>15</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>16</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>17</span>
                <div className={'indicator yellow'}></div>
              </div>
              <div className={'day'}>
                <span>18</span>
                <div className={'indicator transparent'}></div>
              </div>
            </div>
            <div className={'week'}>
              <div className={'day'}>
                <span>19</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>20</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>21</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>22</span>
                <div className={'indicator light-purple'}></div>
              </div>
              <div className={'day'}>
                <span>23</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>24</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>25</span>
                <div className={'indicator transparent'}></div>
              </div>
            </div>
            <div className={'week'}>
              <div className={'day'}>
                <span>26</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>27</span>
                <div className={'indicator red'}></div>
              </div>
              <div className={'day'}>
                <span>28</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>29</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span>30</span>
                <div className={'indicator light-purple'}></div>
              </div>
              <div className={'day'}>
                <span>31</span>
                <div className={'indicator transparent'}></div>
              </div>
              <div className={'day'}>
                <span></span>
                <div className={'indicator transparent'}>&nbsp;&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
        <div className={'center-panel-background'}></div>
        <div className={'right-panel'}>
          <FiArrowUp className={'nav-icon'} />
          <span className={'year main-4'}>2013</span>
          <span className={'year main-3'}>2014</span>
          <span className={'year main-2'}>2015</span>
          <span className={'year main-1'}>2016</span>
          <span className={'year main'}>2017</span>
          <span className={'year main-1'}>2018</span>
          <span className={'year main-2'}>2019</span>
          <span className={'year main-3'}>2020</span>
          <span className={'year main-4'}>2021</span>
          <FiArrowDown className={'nav-icon'} />
        </div>
      </div>
    </div>
  );
}

export { WeekTwo };
