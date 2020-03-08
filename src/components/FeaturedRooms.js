import React, { Component } from 'react';

import { RoomContext } from '../context';

import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        const { loading, featuredRooms } = this.context;

        const rooms = featuredRooms.map(room => {
            return <Room key={room.id} room={room} />
        })

        console.log(featuredRooms);
        return (
            <section className="featured-rooms">
                <Title title="Featured Rooms" />
                <div className="featured-rooms-center">
                    {
                        loading ? <Loading /> : rooms
                    }
                </div>
            </section>
        )
    }
}
