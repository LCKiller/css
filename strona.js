import React, { useState } from 'react';
import axios from 'axios';

const EmbedBuilder = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [iconUrl, setIconUrl] = useState('');
    const [name, setName] = useState('');
    const [nameUrl, setNameUrl] = useState('');
    const [titleUrl, setTitleUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [footer, setFooter] = useState('');
    const [footerIcon, setFooterIcon] = useState('');
    const [selectDate, setSelectDate] = useState('');
    const [color, setColor] = useState('#000000'); // Domyślny kolor to czarny

    const handleSubmit = async (event) => {
        event.preventDefault();
        const embedData = {
            title,
            description,
            iconUrl,
            name,
            nameUrl,
            titleUrl,
            imageUrl,
            thumbnailUrl,
            footer,
            footerIcon,
            selectDate,
            color,
        };

        try {
            await axios.post('http://192.168.1.105:3001/send-embed', embedData);
            alert('Embed sent!');
        } catch (error) {
            console.error('Error sending embed:', error);
            alert('Failed to send embed');
        }
    };

        return (
<>
                <header>
                        <div class="logo">PANDA</div>
                        <nav>
                                <ul>
                                        <li><a href="#">Invite</a></li>
                                        <li><a href="#">Discord</a></li>
                                </ul>
                        </nav>
                </header>
                <main>
                        <div class="sidebar">
                                <h5>SETTINGS</h5>
                                <a href="#">Bot settings</a>
                                <a href="#">Twitch</a>
                                <a href="#">Youtube</a>
                                <a href="#">Commands</a>
                                <a href="#">Welcome</a>
                                <a href="#">Starboard</a>

                                <h5>MODERATION</h5>
                                <a href="#">Automod</a>
                                <a href="#">Moderation</a>
                                <a href="#">Logging</a>
                                <a href="#">Autoroles</a>

                                <h5>UTILITY</h5>
                                <a href="#">Reaction roles</a>
                                <a href="#">Level</a>
                                <a href="#">Tags</a>
                                <a href="#">Triggers</a>
                                <a class="active" href="#home">Embeds</a>
                                <a href="#">Autofeeds</a>
                                <a href="#">Suggestions</a>

                        </div>

                        <div class="content">
                <div class="embed-builder">
                    <h2>Embed Builder</h2>
                    <div class="form">
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
                            <input type="text" value={iconUrl} onChange={(e) => setIconUrl(e.target.value)} placeholder="Icon URL" />
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                            <input type="text" value={nameUrl} onChange={(e) => setNameUrl(e.target.value)} placeholder="Name URL" />
                            <input type="text" value={titleUrl} onChange={(e) => setTitleUrl(e.target.value)} placeholder="Title URL" />
                            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL (big at the bottom)" />
                            <input type="text" value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} placeholder="Thumbnail URL (small top right)" />
                            <input type="text" value={footer} onChange={(e) => setFooter(e.target.value)} placeholder="Footer" />
                            <input type="text" value={footerIcon} onChange={(e) => setFooterIcon(e.target.value)} placeholder="Footer Icon" />
                            <input type="text" value={selectDate} onChange={(e) => setSelectDate(e.target.value)} placeholder="Select date" />
                            <div className="color-picker-container">
                                <button id="colorPickerBtn">Wybierz kolor</button>
                                <input type="color" id="colorPicker" value={color} onChange={(e) => setColor(e.target.value)} style={{ display: 'none' }} />
                            </div>
                            <button type="submit">Wyślij Embed</button>
                        </form>
                    </div>
                </div>                        </div>
                </main>

                <footer>
                        <p>copy; 2024  Panda Bot. Wszelkie prawa zastrzeżone.</p>
                </footer>

<script src="script.js"></script>
</>
        );
};

export default EmbedBuilder;