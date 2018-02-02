import React, { Component, Fragment } from 'react';

export class Genres extends Component {

  render() {
    return (
      <Fragment>
        <h3 className="text-center">Genres</h3>
        <ul className="list-group">
          {
            this.props.genres.map(genre => {
              const activeClass = this.props.selected && this.props.selected.id === genre.id ? ' active' : ''
              return (
                <li
                  key={genre.id}
                  className={`list-group-item${activeClass}`}
                  onClick={e => this.props.onSelect(genre)}>
                  {genre.name}
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    );
  }

}
