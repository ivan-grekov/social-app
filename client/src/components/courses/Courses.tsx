import './courses.scss';
import React from 'react';
import RoomIcon from '@mui/icons-material/Room';

export default function Courses() {
  return (
    <div className="courses">
      <div className="courseWrapper">
        <h3 className="courseeTitle">Upcoming Courses</h3>
        <div className="cardsItems">
          <div className="cardItem">
            <div className="cardHeader js-ru">
              <h4 className="cardItemTitle">JS / FRONT-END. STAGE 0 (RU)</h4>
            </div>
            <div className="cardBody">
              <RoomIcon className="locationIcon" />
              Online
            </div>
            <div className="cardFooter">
              <p className="cardDate">Start date:</p>
              <p className="cardDate">
                <span>December 5, 2022</span>
              </p>
              <a
                href="//rs.school/js-stage0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cardBtn">More details</button>
              </a>
            </div>
          </div>
          <div className="cardItem">
            <div className="cardHeader js-ru">
              <h4 className="cardItemTitle">JS / FRONT-END (RU)</h4>
            </div>
            <div className="cardBody">
              <RoomIcon className="locationIcon" />
              Online
            </div>
            <div className="cardFooter">
              <p className="cardDate">Start date:</p>
              <p className="cardDate">
                <span>March 5, 2023</span>
              </p>
              <a
                href="//rs.school/js/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cardBtn">More details</button>
              </a>
            </div>
          </div>
          <div className="cardItem">
            <div className="cardHeader js-ru">
              <h4 className="cardItemTitle">ANGULAR (EN)</h4>
            </div>
            <div className="cardBody">
              <RoomIcon className="locationIcon" />
              Online
            </div>
            <div className="cardFooter">
              <p className="cardDate">Start date:</p>
              <p className="cardDate">
                <span>March 13, 2023</span>
              </p>
              <a
                href="//rs.school/angular/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cardBtn">More details</button>
              </a>
            </div>
          </div>
          <div className="cardItem">
            <div className="cardHeader js-ru">
              <h4 className="cardItemTitle">REACT (EN)</h4>
            </div>
            <div className="cardBody">
              <RoomIcon className="locationIcon" />
              Online
            </div>
            <div className="cardFooter">
              <p className="cardDate">Start date:</p>
              <p className="cardDate">
                <span>March 13, 2023</span>
              </p>
              <a
                href="//rs.school/react/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cardBtn">More details</button>
              </a>
            </div>
          </div>
          <div className="cardItem">
            <div className="cardHeader node">
              <h4 className="cardItemTitle">NODE.JS IN AWS (EN)</h4>
            </div>
            <div className="cardBody">
              <RoomIcon className="locationIcon" />
              Online
            </div>
            <div className="cardFooter">
              <p className="cardDate">Start date:</p>
              <p className="cardDate">
                <span>March 14, 2023</span>
              </p>
              <a
                href="//rs.school/nodejs-aws/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cardBtn">More details</button>
              </a>
            </div>
          </div>
          <div className="cardItem">
            <div className="cardHeader js-en">
              <h4 className="cardItemTitle">JS / FRONT-END (EN)</h4>
            </div>
            <div className="cardBody">
              <RoomIcon className="locationIcon" />
              Online
            </div>
            <div className="cardFooter">
              <p className="cardDate">Start date:</p>
              <p className="cardDate">
                <span>June 5, 2023</span>
              </p>
              <a
                href="//rs.school/lithuania/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cardBtn">More details</button>
              </a>
            </div>
          </div>
          <div className="cardItem">
            <div className="cardHeader node">
              <h4 className="cardItemTitle">NODE.JS (RU)</h4>
            </div>
            <div className="cardBody">
              <RoomIcon className="locationIcon" />
              Online
            </div>
            <div className="cardFooter">
              <p className="cardDate">Start date:</p>
              <p className="cardDate">
                <span>TBD</span>
              </p>
              <a
                href="//rs.school/nodejs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cardBtn">More details</button>
              </a>
            </div>
          </div>
          <div className="cardItem">
            <div className="cardHeader js-en">
              <h4 className="cardItemTitle">JS / FRONT-END (EN)</h4>
            </div>
            <div className="cardBody">
              <RoomIcon className="locationIcon" />
              Online
            </div>
            <div className="cardFooter">
              <p className="cardDate">Start date:</p>
              <p className="cardDate">
                <span>TBD</span>
              </p>
              <a
                href="//rs.school/js-en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cardBtn">More details</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
