import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { blogAction } from "../../redux/slice/sliceBlog";

import { Footer } from "../Footer/Footer";
import "./blog.scss";

export const Blog = () => {
  const dispatch = useAppDispatch();
  const { likeCount, redLike } = useAppSelector((state: any) => state.blogReducer);

  const handleClick = (e) => {
    dispatch(blogAction.handleLikeCount(e.target.value));
  };

  return (
    <section className="blog__container">
      <h1 className="blog__title ">The Coffee Shop</h1>
      <div className="blog__detail">
        <span className="blog__author">Author: Jon Doe</span>
        <div>
          <button
            className={!redLike ? "blog__likes" : "blog__likes-active"}
            onClick={handleClick}
          >
            {likeCount} likes
          </button>
        </div>
      </div>
      <div className="blog__history">
        Lila opened the door cautiously. There was an odd feeling in the coffee
        shop, although she couldn’t quite place it. Bells rang, and everybody’s
        attention immediately turned= to her. Lila wasn’t used to feeling shy,
        so it took her by surprise when she felt her face start to heat up.
        There were at least thirty guys in the shop, all of them much bigger
        than Lila. <br /> <p className="p"></p>They were all burly, wearing
        leather jackets and bandannas, and each had at least three tattoos. They
        were kinda scary, Lila noted, but the workers seemed nice. Looking at
        the floor, Lila made her way to the counter, where a lady was smiling
        kindly at her, clearly noticing her discomfort. She could hardly see
        above the counter and had to stand on the tips of her toes to read the
        menu. “Welcome to King’s Place Coffee, how may I help you?” She had
        bright blue eyes and platinum blonde hair pulled up into a messy bun.
        She was looking at her fondly, as if Lila was a child. <br />{" "}
        <p className="p"></p>She wasn’t wrong, but it still made Lila mad. “Can
        I have, um-” Lila bounced up and down on her toes- “A black coffee,
        please?” The lady smiled and laughed, and Lila glanced down to see that
        her name tag read Evelynne. <br /> <p className="p"></p> “You’re sure
        you’ll be able to drink a whole black coffee, sweetie?” Lila crossed her
        arms over her chest. “Yes I will.” She huffed. “I even have money for
        it.” She placed a few dollars on the counter. “Of course, sweetheart.”
        She said, and Lila’s face turned into a mini furnace. She stepped away
        from the desk and glanced around the room, searching for a chair in the
        corner that she could hide in. There was a group of two armchairs in the
        corner, and one of them was unoccupied. The other one had a tall,
        African-American man who looked to be in his early forties wearing a
        police uniform sitting in it. He was reading a newspaper, and taking
        turns between taking a sip of coffee and turning the page. He looked a
        little less intimidating than the rest of the customers, so Lila decided
        to test her luck. <br /> <p className="p"></p> Maybe the man wouldn’t
        even notice her. Avoiding condescending looks from the other men, Lila
        practically tip-toed to the corner of the room and sat down in the
        chair. She caught the amused glance from the man next to him as the
        cushion sunk down, leaving Lila feeling even smaller than before. Why on
        earth had she decided to come to this place? Sure, it was on a dare from
        Tommy, but he would’ve been too scared. Thinking of Tommy’s face when
        Lila told him she’d gone into the scary coffee shop on King’s Place gave
        her a surge of confidence. /”You know what, Lila?” Tommy sneered, his
        red curls making his glare even fiercer. Lila put her hands on her hips.
        “What, Tommy?” <br /> He gave her a devilish smile, and with a coldness
        sinking in her gut, she knew what he was about to say. “I dare you to
        walk into the coffee shop.” <br />
        <p className="p"></p>
        The half-dozen children surrounding them gasped in harmony. “I dare you
        to walk into the coffee shop and order a drink.” Lila swallowed. The
        coffee shop was the only thing she was sure she was afraid of. “Do you
        know what?” Lila said, feeling a surge of courage. “I will!”/ Evelynne
        walked over, handing Lila a steaming mug of coffee. She gripped it,
        thankful for the warmth it brought her coldened-by-nerves hands. In an
        effort to look at least slightly comfortable, Lila sipped the coffee
        without waiting for it to cool. The steaming hot drink disagreed with
        her decision. “Ouch!” She said, pulling her burned tongue away from the
        mug. Again, she caught an entertained look from the uniformed man. With
        a sigh, Lila slumped down in her chair. “Your parents say you could come
        here?.” <br /> <p className="p"></p>A voice said. Looking around, Lila
        saw the man sitting next to her leaning forward in his seat, his
        newspaper sitting on his lap. Lila grinned sheepishly. “Sort of.” The
        man smiled, holding out his hand. “David Alan, at your pleasure..” Lila
        took his hand, shaking it. “I’m Lila.” He replied, scooting forward in
        her chair in order to sit up taller. Her feet barely touched the floor.
        David obviously noticed her motion and gave her a grin. “How old are
        you, kid?” Lila hesitated, deciding whether to tell the truth or not.
        “Twenty.” She finally said. David lifted an eyebrow, clearly not fooled.
        Lila sighed. “Six.” David let out a soft chuckle, tousling Lila’s hair.
        “Couldn’t have fooled me. I’m thirty-eight, sweetie, been around a long
        time.” Lila offered him a smile as she took another sip of her coffee,
        which had cooled a great deal. David, glanced down at her drink,
        eyebrows lifted. “Black?” Lila smiled proudly, smoothing her dress. “Of
        course!” she exclaimed. David smiled back, showing her his brink. While
        Lila’s was dark brown, his was so light it almost looked like milk.
        “Well, then you’re braver than me.” He said. <br />
        <p className="p"></p>
        “I can’t drink it nearly that strong.” Glancing around, David leaned
        closer to Lila, whispering in her ear. “Sometimes at home, I don’t even
        put coffee in. Just cream and sugar.” Lila giggled, then clapped her
        hands over her mouth. “Really?” David nodded, looking dramatically
        ashamed. David checked his watch, clicking his tongue at the time he
        saw. “It’s getting late.” He said, standing up and offering his hand to
        her. “What do you say I walk you home?” Lila took it, hopping to her
        feet. <br /> <p className="p"></p> “Tommy won’t believe that I actually
        came here!” She squealed, not caring about the looks the men in the shop
        were giving her. She looked up at David, her big brown eyes sparkling.
        He looked down at her, and suddenly Lila had visions of Tommy on his
        knees, sobbing as he apologized for underestimating Lila. “I hardly
        believe it myself,” David said. Together, they walked out the door, Lila
        skipping as she held hands with her new friend.
      </div>

      <Footer />
    </section>
  );
};
