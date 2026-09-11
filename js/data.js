/**
 * ALICE ESL Phonics P6 - 小兔冰上拼讀大冒險題庫
 * 課本學習範圍：Page 04 - 12
 * 主題：Consonants (Nn, Vv, Xx, Zz) & Pets
 */

window.BOOK_ID = "P6";
const P6_VOCABULARY = [
  {
    "id": "beep",
    "word": "beep",
    "zh": "beep",
    "image": "P6_flashcards_images/P6_beep.webp",
    "audioEn": "P6_flashcards_audios/P6_beep.mp3",
    "audioZh": "P6_flashcards_audios/P6_beep_zh.mp3"
  },
  {
    "id": "bicycle",
    "word": "bicycle",
    "zh": "bicycle",
    "image": "P6_flashcards_images/P6_bicycle.webp",
    "audioEn": "P6_flashcards_audios/P6_bicycle.mp3",
    "audioZh": "P6_flashcards_audios/P6_bicycle_zh.mp3"
  },
  {
    "id": "big",
    "word": "big",
    "zh": "big",
    "image": "P6_flashcards_images/P6_big.webp",
    "audioEn": "P6_flashcards_audios/P6_big.mp3",
    "audioZh": "P6_flashcards_audios/P6_big_zh.mp3"
  },
  {
    "id": "blank",
    "word": "blank",
    "zh": "blank",
    "image": "P6_flashcards_images/P6_blank.webp",
    "audioEn": "P6_flashcards_audios/P6_blank.mp3",
    "audioZh": "P6_flashcards_audios/P6_blank_zh.mp3"
  },
  {
    "id": "boat",
    "word": "boat",
    "zh": "boat",
    "image": "P6_flashcards_images/P6_boat.webp",
    "audioEn": "P6_flashcards_audios/P6_boat.mp3",
    "audioZh": "P6_flashcards_audios/P6_boat_zh.mp3"
  },
  {
    "id": "book",
    "word": "book",
    "zh": "book",
    "image": "P6_flashcards_images/P6_book.webp",
    "audioEn": "P6_flashcards_audios/P6_book.mp3",
    "audioZh": "P6_flashcards_audios/P6_book_zh.mp3"
  },
  {
    "id": "books",
    "word": "books",
    "zh": "books",
    "image": "P6_flashcards_images/P6_books.webp",
    "audioEn": "P6_flashcards_audios/P6_books.mp3",
    "audioZh": "P6_flashcards_audios/P6_books_zh.mp3"
  },
  {
    "id": "box",
    "word": "box",
    "zh": "box",
    "image": "P6_flashcards_images/P6_box.webp",
    "audioEn": "P6_flashcards_audios/P6_box.mp3",
    "audioZh": "P6_flashcards_audios/P6_box_zh.mp3"
  },
  {
    "id": "brick",
    "word": "brick",
    "zh": "brick",
    "image": "P6_flashcards_images/P6_brick.webp",
    "audioEn": "P6_flashcards_audios/P6_brick.mp3",
    "audioZh": "P6_flashcards_audios/P6_brick_zh.mp3"
  },
  {
    "id": "bunny",
    "word": "bunny",
    "zh": "bunny",
    "image": "P6_flashcards_images/P6_bunny.webp",
    "audioEn": "P6_flashcards_audios/P6_bunny.mp3",
    "audioZh": "P6_flashcards_audios/P6_bunny_zh.mp3"
  },
  {
    "id": "by",
    "word": "by",
    "zh": "by",
    "image": "P6_flashcards_images/P6_by.webp",
    "audioEn": "P6_flashcards_audios/P6_by.mp3",
    "audioZh": "P6_flashcards_audios/P6_by_zh.mp3"
  },
  {
    "id": "came",
    "word": "came",
    "zh": "came",
    "image": "P6_flashcards_images/P6_came.webp",
    "audioEn": "P6_flashcards_audios/P6_came.mp3",
    "audioZh": "P6_flashcards_audios/P6_came_zh.mp3"
  },
  {
    "id": "candy",
    "word": "candy",
    "zh": "candy",
    "image": "P6_flashcards_images/P6_candy.webp",
    "audioEn": "P6_flashcards_audios/P6_candy.mp3",
    "audioZh": "P6_flashcards_audios/P6_candy_zh.mp3"
  },
  {
    "id": "cars",
    "word": "cars",
    "zh": "cars",
    "image": "P6_flashcards_images/P6_cars.webp",
    "audioEn": "P6_flashcards_audios/P6_cars.mp3",
    "audioZh": "P6_flashcards_audios/P6_cars_zh.mp3"
  },
  {
    "id": "catch",
    "word": "catch",
    "zh": "catch",
    "image": "P6_flashcards_images/P6_catch.webp",
    "audioEn": "P6_flashcards_audios/P6_catch.mp3",
    "audioZh": "P6_flashcards_audios/P6_catch_zh.mp3"
  },
  {
    "id": "cats",
    "word": "cats",
    "zh": "cats",
    "image": "P6_flashcards_images/P6_cats.webp",
    "audioEn": "P6_flashcards_audios/P6_cats.mp3",
    "audioZh": "P6_flashcards_audios/P6_cats_zh.mp3"
  },
  {
    "id": "chimney",
    "word": "chimney",
    "zh": "chimney",
    "image": "P6_flashcards_images/P6_chimney.webp",
    "audioEn": "P6_flashcards_audios/P6_chimney.mp3",
    "audioZh": "P6_flashcards_audios/P6_chimney_zh.mp3"
  },
  {
    "id": "circle",
    "word": "circle",
    "zh": "circle",
    "image": "P6_flashcards_images/P6_circle.webp",
    "audioEn": "P6_flashcards_audios/P6_circle.mp3",
    "audioZh": "P6_flashcards_audios/P6_circle_zh.mp3"
  },
  {
    "id": "city",
    "word": "city",
    "zh": "city",
    "image": "P6_flashcards_images/P6_city.webp",
    "audioEn": "P6_flashcards_audios/P6_city.mp3",
    "audioZh": "P6_flashcards_audios/P6_city_zh.mp3"
  },
  {
    "id": "close",
    "word": "close",
    "zh": "close",
    "image": "P6_flashcards_images/P6_close.webp",
    "audioEn": "P6_flashcards_audios/P6_close.mp3",
    "audioZh": "P6_flashcards_audios/P6_close_zh.mp3"
  },
  {
    "id": "clue",
    "word": "clue",
    "zh": "clue",
    "image": "P6_flashcards_images/P6_clue.webp",
    "audioEn": "P6_flashcards_audios/P6_clue.mp3",
    "audioZh": "P6_flashcards_audios/P6_clue_zh.mp3"
  },
  {
    "id": "coat",
    "word": "coat",
    "zh": "coat",
    "image": "P6_flashcards_images/P6_coat.webp",
    "audioEn": "P6_flashcards_audios/P6_coat.mp3",
    "audioZh": "P6_flashcards_audios/P6_coat_zh.mp3"
  },
  {
    "id": "cook",
    "word": "cook",
    "zh": "cook",
    "image": "P6_flashcards_images/P6_cook.webp",
    "audioEn": "P6_flashcards_audios/P6_cook.mp3",
    "audioZh": "P6_flashcards_audios/P6_cook_zh.mp3"
  },
  {
    "id": "crayon",
    "word": "crayon",
    "zh": "crayon",
    "image": "P6_flashcards_images/P6_crayon.webp",
    "audioEn": "P6_flashcards_audios/P6_crayon.mp3",
    "audioZh": "P6_flashcards_audios/P6_crayon_zh.mp3"
  },
  {
    "id": "cry",
    "word": "cry",
    "zh": "cry",
    "image": "P6_flashcards_images/P6_cry.webp",
    "audioEn": "P6_flashcards_audios/P6_cry.mp3",
    "audioZh": "P6_flashcards_audios/P6_cry_zh.mp3"
  },
  {
    "id": "cup",
    "word": "cup",
    "zh": "cup",
    "image": "P6_flashcards_images/P6_cup.webp",
    "audioEn": "P6_flashcards_audios/P6_cup.mp3",
    "audioZh": "P6_flashcards_audios/P6_cup_zh.mp3"
  },
  {
    "id": "day",
    "word": "day",
    "zh": "day",
    "image": "P6_flashcards_images/P6_day.webp",
    "audioEn": "P6_flashcards_audios/P6_day.mp3",
    "audioZh": "P6_flashcards_audios/P6_day_zh.mp3"
  },
  {
    "id": "desks",
    "word": "desks",
    "zh": "desks",
    "image": "P6_flashcards_images/P6_desks.webp",
    "audioEn": "P6_flashcards_audios/P6_desks.mp3",
    "audioZh": "P6_flashcards_audios/P6_desks_zh.mp3"
  },
  {
    "id": "dig",
    "word": "dig",
    "zh": "dig",
    "image": "P6_flashcards_images/P6_dig.webp",
    "audioEn": "P6_flashcards_audios/P6_dig.mp3",
    "audioZh": "P6_flashcards_audios/P6_dig_zh.mp3"
  },
  {
    "id": "dish",
    "word": "dish",
    "zh": "dish",
    "image": "P6_flashcards_images/P6_dish.webp",
    "audioEn": "P6_flashcards_audios/P6_dish.mp3",
    "audioZh": "P6_flashcards_audios/P6_dish_zh.mp3"
  },
  {
    "id": "dog",
    "word": "dog",
    "zh": "dog",
    "image": "P6_flashcards_images/P6_dog.webp",
    "audioEn": "P6_flashcards_audios/P6_dog.mp3",
    "audioZh": "P6_flashcards_audios/P6_dog_zh.mp3"
  },
  {
    "id": "dogs",
    "word": "dogs",
    "zh": "dogs",
    "image": "P6_flashcards_images/P6_dogs.webp",
    "audioEn": "P6_flashcards_audios/P6_dogs.mp3",
    "audioZh": "P6_flashcards_audios/P6_dogs_zh.mp3"
  },
  {
    "id": "donkey",
    "word": "donkey",
    "zh": "donkey",
    "image": "P6_flashcards_images/P6_donkey.webp",
    "audioEn": "P6_flashcards_audios/P6_donkey.mp3",
    "audioZh": "P6_flashcards_audios/P6_donkey_zh.mp3"
  },
  {
    "id": "drink",
    "word": "drink",
    "zh": "drink",
    "image": "P6_flashcards_images/P6_drink.webp",
    "audioEn": "P6_flashcards_audios/P6_drink.mp3",
    "audioZh": "P6_flashcards_audios/P6_drink_zh.mp3"
  },
  {
    "id": "drop",
    "word": "drop",
    "zh": "drop",
    "image": "P6_flashcards_images/P6_drop.webp",
    "audioEn": "P6_flashcards_audios/P6_drop.mp3",
    "audioZh": "P6_flashcards_audios/P6_drop_zh.mp3"
  },
  {
    "id": "duck",
    "word": "duck",
    "zh": "duck",
    "image": "P6_flashcards_images/P6_duck.webp",
    "audioEn": "P6_flashcards_audios/P6_duck.mp3",
    "audioZh": "P6_flashcards_audios/P6_duck_zh.mp3"
  },
  {
    "id": "dump",
    "word": "dump",
    "zh": "dump",
    "image": "P6_flashcards_images/P6_dump.webp",
    "audioEn": "P6_flashcards_audios/P6_dump.mp3",
    "audioZh": "P6_flashcards_audios/P6_dump_zh.mp3"
  },
  {
    "id": "face",
    "word": "face",
    "zh": "face",
    "image": "P6_flashcards_images/P6_face.webp",
    "audioEn": "P6_flashcards_audios/P6_face.mp3",
    "audioZh": "P6_flashcards_audios/P6_face_zh.mp3"
  },
  {
    "id": "fan",
    "word": "fan",
    "zh": "fan",
    "image": "P6_flashcards_images/P6_fan.webp",
    "audioEn": "P6_flashcards_audios/P6_fan.mp3",
    "audioZh": "P6_flashcards_audios/P6_fan_zh.mp3"
  },
  {
    "id": "fish",
    "word": "fish",
    "zh": "fish",
    "image": "P6_flashcards_images/P6_fish.webp",
    "audioEn": "P6_flashcards_audios/P6_fish.mp3",
    "audioZh": "P6_flashcards_audios/P6_fish_zh.mp3"
  },
  {
    "id": "flame",
    "word": "flame",
    "zh": "flame",
    "image": "P6_flashcards_images/P6_flame.webp",
    "audioEn": "P6_flashcards_audios/P6_flame.mp3",
    "audioZh": "P6_flashcards_audios/P6_flame_zh.mp3"
  },
  {
    "id": "fly",
    "word": "fly",
    "zh": "fly",
    "image": "P6_flashcards_images/P6_fly.webp",
    "audioEn": "P6_flashcards_audios/P6_fly.mp3",
    "audioZh": "P6_flashcards_audios/P6_fly_zh.mp3"
  },
  {
    "id": "fog",
    "word": "fog",
    "zh": "fog",
    "image": "P6_flashcards_images/P6_fog.webp",
    "audioEn": "P6_flashcards_audios/P6_fog.mp3",
    "audioZh": "P6_flashcards_audios/P6_fog_zh.mp3"
  },
  {
    "id": "fox",
    "word": "fox",
    "zh": "fox",
    "image": "P6_flashcards_images/P6_fox.webp",
    "audioEn": "P6_flashcards_audios/P6_fox.mp3",
    "audioZh": "P6_flashcards_audios/P6_fox_zh.mp3"
  },
  {
    "id": "fun",
    "word": "fun",
    "zh": "fun",
    "image": "P6_flashcards_images/P6_fun.webp",
    "audioEn": "P6_flashcards_audios/P6_fun.mp3",
    "audioZh": "P6_flashcards_audios/P6_fun_zh.mp3"
  },
  {
    "id": "funny",
    "word": "funny",
    "zh": "funny",
    "image": "P6_flashcards_images/P6_funny.webp",
    "audioEn": "P6_flashcards_audios/P6_funny.mp3",
    "audioZh": "P6_flashcards_audios/P6_funny_zh.mp3"
  },
  {
    "id": "get",
    "word": "get",
    "zh": "get",
    "image": "P6_flashcards_images/P6_get.webp",
    "audioEn": "P6_flashcards_audios/P6_get.mp3",
    "audioZh": "P6_flashcards_audios/P6_get_zh.mp3"
  },
  {
    "id": "glue",
    "word": "glue",
    "zh": "glue",
    "image": "P6_flashcards_images/P6_glue.webp",
    "audioEn": "P6_flashcards_audios/P6_glue.mp3",
    "audioZh": "P6_flashcards_audios/P6_glue_zh.mp3"
  },
  {
    "id": "goat",
    "word": "goat",
    "zh": "goat",
    "image": "P6_flashcards_images/P6_goat.webp",
    "audioEn": "P6_flashcards_audios/P6_goat.mp3",
    "audioZh": "P6_flashcards_audios/P6_goat_zh.mp3"
  },
  {
    "id": "gray",
    "word": "gray",
    "zh": "gray",
    "image": "P6_flashcards_images/P6_gray.webp",
    "audioEn": "P6_flashcards_audios/P6_gray.mp3",
    "audioZh": "P6_flashcards_audios/P6_gray_zh.mp3"
  },
  {
    "id": "grid",
    "word": "grid",
    "zh": "grid",
    "image": "P6_flashcards_images/P6_grid.webp",
    "audioEn": "P6_flashcards_audios/P6_grid.mp3",
    "audioZh": "P6_flashcards_audios/P6_grid_zh.mp3"
  },
  {
    "id": "happy",
    "word": "happy",
    "zh": "happy",
    "image": "P6_flashcards_images/P6_happy.webp",
    "audioEn": "P6_flashcards_audios/P6_happy.mp3",
    "audioZh": "P6_flashcards_audios/P6_happy_zh.mp3"
  },
  {
    "id": "has",
    "word": "has",
    "zh": "has",
    "image": "P6_flashcards_images/P6_has.webp",
    "audioEn": "P6_flashcards_audios/P6_has.mp3",
    "audioZh": "P6_flashcards_audios/P6_has_zh.mp3"
  },
  {
    "id": "hat",
    "word": "hat",
    "zh": "hat",
    "image": "P6_flashcards_images/P6_hat.webp",
    "audioEn": "P6_flashcards_audios/P6_hat.mp3",
    "audioZh": "P6_flashcards_audios/P6_hat_zh.mp3"
  },
  {
    "id": "heat",
    "word": "heat",
    "zh": "heat",
    "image": "P6_flashcards_images/P6_heat.webp",
    "audioEn": "P6_flashcards_audios/P6_heat.mp3",
    "audioZh": "P6_flashcards_audios/P6_heat_zh.mp3"
  },
  {
    "id": "hen",
    "word": "hen",
    "zh": "hen",
    "image": "P6_flashcards_images/P6_hen.webp",
    "audioEn": "P6_flashcards_audios/P6_hen.mp3",
    "audioZh": "P6_flashcards_audios/P6_hen_zh.mp3"
  },
  {
    "id": "his",
    "word": "his",
    "zh": "his",
    "image": "P6_flashcards_images/P6_his.webp",
    "audioEn": "P6_flashcards_audios/P6_his.mp3",
    "audioZh": "P6_flashcards_audios/P6_his_zh.mp3"
  },
  {
    "id": "honey",
    "word": "honey",
    "zh": "honey",
    "image": "P6_flashcards_images/P6_honey.webp",
    "audioEn": "P6_flashcards_audios/P6_honey.mp3",
    "audioZh": "P6_flashcards_audios/P6_honey_zh.mp3"
  },
  {
    "id": "horse",
    "word": "horse",
    "zh": "horse",
    "image": "P6_flashcards_images/P6_horse.webp",
    "audioEn": "P6_flashcards_audios/P6_horse.mp3",
    "audioZh": "P6_flashcards_audios/P6_horse_zh.mp3"
  },
  {
    "id": "ink",
    "word": "ink",
    "zh": "ink",
    "image": "P6_flashcards_images/P6_ink.webp",
    "audioEn": "P6_flashcards_audios/P6_ink.mp3",
    "audioZh": "P6_flashcards_audios/P6_ink_zh.mp3"
  },
  {
    "id": "jeep",
    "word": "jeep",
    "zh": "jeep",
    "image": "P6_flashcards_images/P6_jeep.webp",
    "audioEn": "P6_flashcards_audios/P6_jeep.mp3",
    "audioZh": "P6_flashcards_audios/P6_jeep_zh.mp3"
  },
  {
    "id": "juice",
    "word": "juice",
    "zh": "juice",
    "image": "P6_flashcards_images/P6_juice.webp",
    "audioEn": "P6_flashcards_audios/P6_juice.mp3",
    "audioZh": "P6_flashcards_audios/P6_juice_zh.mp3"
  },
  {
    "id": "jump",
    "word": "jump",
    "zh": "jump",
    "image": "P6_flashcards_images/P6_jump.webp",
    "audioEn": "P6_flashcards_audios/P6_jump.mp3",
    "audioZh": "P6_flashcards_audios/P6_jump_zh.mp3"
  },
  {
    "id": "key",
    "word": "key",
    "zh": "key",
    "image": "P6_flashcards_images/P6_key.webp",
    "audioEn": "P6_flashcards_audios/P6_key.mp3",
    "audioZh": "P6_flashcards_audios/P6_key_zh.mp3"
  },
  {
    "id": "kick",
    "word": "kick",
    "zh": "kick",
    "image": "P6_flashcards_images/P6_kick.webp",
    "audioEn": "P6_flashcards_audios/P6_kick.mp3",
    "audioZh": "P6_flashcards_audios/P6_kick_zh.mp3"
  },
  {
    "id": "kid",
    "word": "kid",
    "zh": "kid",
    "image": "P6_flashcards_images/P6_kid.webp",
    "audioEn": "P6_flashcards_audios/P6_kid.mp3",
    "audioZh": "P6_flashcards_audios/P6_kid_zh.mp3"
  },
  {
    "id": "lick",
    "word": "lick",
    "zh": "lick",
    "image": "P6_flashcards_images/P6_lick.webp",
    "audioEn": "P6_flashcards_audios/P6_lick.mp3",
    "audioZh": "P6_flashcards_audios/P6_lick_zh.mp3"
  },
  {
    "id": "lid",
    "word": "lid",
    "zh": "lid",
    "image": "P6_flashcards_images/P6_lid.webp",
    "audioEn": "P6_flashcards_audios/P6_lid.mp3",
    "audioZh": "P6_flashcards_audios/P6_lid_zh.mp3"
  },
  {
    "id": "log",
    "word": "log",
    "zh": "log",
    "image": "P6_flashcards_images/P6_log.webp",
    "audioEn": "P6_flashcards_audios/P6_log.mp3",
    "audioZh": "P6_flashcards_audios/P6_log_zh.mp3"
  },
  {
    "id": "look",
    "word": "look",
    "zh": "look",
    "image": "P6_flashcards_images/P6_look.webp",
    "audioEn": "P6_flashcards_audios/P6_look.mp3",
    "audioZh": "P6_flashcards_audios/P6_look_zh.mp3"
  },
  {
    "id": "luck",
    "word": "luck",
    "zh": "luck",
    "image": "P6_flashcards_images/P6_luck.webp",
    "audioEn": "P6_flashcards_audios/P6_luck.mp3",
    "audioZh": "P6_flashcards_audios/P6_luck_zh.mp3"
  },
  {
    "id": "man",
    "word": "man",
    "zh": "man",
    "image": "P6_flashcards_images/P6_man.webp",
    "audioEn": "P6_flashcards_audios/P6_man.mp3",
    "audioZh": "P6_flashcards_audios/P6_man_zh.mp3"
  },
  {
    "id": "mat",
    "word": "mat",
    "zh": "mat",
    "image": "P6_flashcards_images/P6_mat.webp",
    "audioEn": "P6_flashcards_audios/P6_mat.mp3",
    "audioZh": "P6_flashcards_audios/P6_mat_zh.mp3"
  },
  {
    "id": "meat",
    "word": "meat",
    "zh": "meat",
    "image": "P6_flashcards_images/P6_meat.webp",
    "audioEn": "P6_flashcards_audios/P6_meat.mp3",
    "audioZh": "P6_flashcards_audios/P6_meat_zh.mp3"
  },
  {
    "id": "money",
    "word": "money",
    "zh": "money",
    "image": "P6_flashcards_images/P6_money.webp",
    "audioEn": "P6_flashcards_audios/P6_money.mp3",
    "audioZh": "P6_flashcards_audios/P6_money_zh.mp3"
  },
  {
    "id": "monkey",
    "word": "monkey",
    "zh": "monkey",
    "image": "P6_flashcards_images/P6_monkey.webp",
    "audioEn": "P6_flashcards_audios/P6_monkey.mp3",
    "audioZh": "P6_flashcards_audios/P6_monkey_zh.mp3"
  },
  {
    "id": "mop",
    "word": "mop",
    "zh": "mop",
    "image": "P6_flashcards_images/P6_mop.webp",
    "audioEn": "P6_flashcards_audios/P6_mop.mp3",
    "audioZh": "P6_flashcards_audios/P6_mop_zh.mp3"
  },
  {
    "id": "name",
    "word": "name",
    "zh": "name",
    "image": "P6_flashcards_images/P6_name.webp",
    "audioEn": "P6_flashcards_audios/P6_name.mp3",
    "audioZh": "P6_flashcards_audios/P6_name_zh.mp3"
  },
  {
    "id": "nest",
    "word": "nest",
    "zh": "nest",
    "image": "P6_flashcards_images/P6_nest.webp",
    "audioEn": "P6_flashcards_audios/P6_nest.mp3",
    "audioZh": "P6_flashcards_audios/P6_nest_zh.mp3"
  },
  {
    "id": "net",
    "word": "net",
    "zh": "net",
    "image": "P6_flashcards_images/P6_net.webp",
    "audioEn": "P6_flashcards_audios/P6_net.mp3",
    "audioZh": "P6_flashcards_audios/P6_net_zh.mp3"
  },
  {
    "id": "next to",
    "word": "next to",
    "zh": "next to",
    "image": "P6_flashcards_images/P6_next to.webp",
    "audioEn": "P6_flashcards_audios/P6_next to.mp3",
    "audioZh": "P6_flashcards_audios/P6_next to_zh.mp3"
  },
  {
    "id": "night",
    "word": "night",
    "zh": "night",
    "image": "P6_flashcards_images/P6_night.webp",
    "audioEn": "P6_flashcards_audios/P6_night.mp3",
    "audioZh": "P6_flashcards_audios/P6_night_zh.mp3"
  },
  {
    "id": "nine",
    "word": "nine",
    "zh": "nine",
    "image": "P6_flashcards_images/P6_nine.webp",
    "audioEn": "P6_flashcards_audios/P6_nine.mp3",
    "audioZh": "P6_flashcards_audios/P6_nine_zh.mp3"
  },
  {
    "id": "nose",
    "word": "nose",
    "zh": "nose",
    "image": "P6_flashcards_images/P6_nose.webp",
    "audioEn": "P6_flashcards_audios/P6_nose.mp3",
    "audioZh": "P6_flashcards_audios/P6_nose_zh.mp3"
  },
  {
    "id": "now",
    "word": "now",
    "zh": "now",
    "image": "P6_flashcards_images/P6_now.webp",
    "audioEn": "P6_flashcards_audios/P6_now.mp3",
    "audioZh": "P6_flashcards_audios/P6_now_zh.mp3"
  },
  {
    "id": "nun",
    "word": "nun",
    "zh": "nun",
    "image": "P6_flashcards_images/P6_nun.webp",
    "audioEn": "P6_flashcards_audios/P6_nun.mp3",
    "audioZh": "P6_flashcards_audios/P6_nun_zh.mp3"
  },
  {
    "id": "ox",
    "word": "ox",
    "zh": "ox",
    "image": "P6_flashcards_images/P6_ox.webp",
    "audioEn": "P6_flashcards_audios/P6_ox.mp3",
    "audioZh": "P6_flashcards_audios/P6_ox_zh.mp3"
  },
  {
    "id": "pat",
    "word": "pat",
    "zh": "pat",
    "image": "P6_flashcards_images/P6_pat.webp",
    "audioEn": "P6_flashcards_audios/P6_pat.mp3",
    "audioZh": "P6_flashcards_audios/P6_pat_zh.mp3"
  },
  {
    "id": "pen",
    "word": "pen",
    "zh": "pen",
    "image": "P6_flashcards_images/P6_pen.webp",
    "audioEn": "P6_flashcards_audios/P6_pen.mp3",
    "audioZh": "P6_flashcards_audios/P6_pen_zh.mp3"
  },
  {
    "id": "pretty",
    "word": "pretty",
    "zh": "pretty",
    "image": "P6_flashcards_images/P6_pretty.webp",
    "audioEn": "P6_flashcards_audios/P6_pretty.mp3",
    "audioZh": "P6_flashcards_audios/P6_pretty_zh.mp3"
  },
  {
    "id": "pump",
    "word": "pump",
    "zh": "pump",
    "image": "P6_flashcards_images/P6_pump.webp",
    "audioEn": "P6_flashcards_audios/P6_pump.mp3",
    "audioZh": "P6_flashcards_audios/P6_pump_zh.mp3"
  },
  {
    "id": "recycle",
    "word": "recycle",
    "zh": "recycle",
    "image": "P6_flashcards_images/P6_recycle.webp",
    "audioEn": "P6_flashcards_audios/P6_recycle.mp3",
    "audioZh": "P6_flashcards_audios/P6_recycle_zh.mp3"
  },
  {
    "id": "red",
    "word": "red",
    "zh": "red",
    "image": "P6_flashcards_images/P6_red.webp",
    "audioEn": "P6_flashcards_audios/P6_red.mp3",
    "audioZh": "P6_flashcards_audios/P6_red_zh.mp3"
  },
  {
    "id": "rose",
    "word": "rose",
    "zh": "rose",
    "image": "P6_flashcards_images/P6_rose.webp",
    "audioEn": "P6_flashcards_audios/P6_rose.mp3",
    "audioZh": "P6_flashcards_audios/P6_rose_zh.mp3"
  },
  {
    "id": "roses",
    "word": "roses",
    "zh": "roses",
    "image": "P6_flashcards_images/P6_roses.webp",
    "audioEn": "P6_flashcards_audios/P6_roses.mp3",
    "audioZh": "P6_flashcards_audios/P6_roses_zh.mp3"
  },
  {
    "id": "same",
    "word": "same",
    "zh": "same",
    "image": "P6_flashcards_images/P6_same.webp",
    "audioEn": "P6_flashcards_audios/P6_same.mp3",
    "audioZh": "P6_flashcards_audios/P6_same_zh.mp3"
  },
  {
    "id": "say",
    "word": "say",
    "zh": "say",
    "image": "P6_flashcards_images/P6_say.webp",
    "audioEn": "P6_flashcards_audios/P6_say.mp3",
    "audioZh": "P6_flashcards_audios/P6_say_zh.mp3"
  },
  {
    "id": "seat",
    "word": "seat",
    "zh": "seat",
    "image": "P6_flashcards_images/P6_seat.webp",
    "audioEn": "P6_flashcards_audios/P6_seat.mp3",
    "audioZh": "P6_flashcards_audios/P6_seat_zh.mp3"
  },
  {
    "id": "seed",
    "word": "seed",
    "zh": "seed",
    "image": "P6_flashcards_images/P6_seed.webp",
    "audioEn": "P6_flashcards_audios/P6_seed.mp3",
    "audioZh": "P6_flashcards_audios/P6_seed_zh.mp3"
  },
  {
    "id": "sick",
    "word": "sick",
    "zh": "sick",
    "image": "P6_flashcards_images/P6_sick.webp",
    "audioEn": "P6_flashcards_audios/P6_sick.mp3",
    "audioZh": "P6_flashcards_audios/P6_sick_zh.mp3"
  }
];

// 自然發音/首音分組（對應課本 Page 04 - 12）
const PHONICS_GROUPS = {
  "Nn": [
    "name",
    "nest",
    "night",
    "nine",
    "nun",
    "net"
  ],
  "Bb": [
    "bunny",
    "book",
    "books",
    "box",
    "brick",
    "bicycle",
    "beep",
    "big"
  ],
  "Dd": [
    "dog",
    "dogs",
    "donkey",
    "duck",
    "dump",
    "dig",
    "dish",
    "drink"
  ],
  "Ff": [
    "fox",
    "fish",
    "fun",
    "funny",
    "fly",
    "fog",
    "face",
    "fan"
  ]
};

// 課文動作與問答情境題庫
const ANIMAL_ACTION_QUESTIONS = [
  {
    "sentence": "Sue has a pet. Her cute pet is a little bunny.",
    "question": "What is Sue's pet?",
    "ttsPrompt": "Sue has a pet. Her cute pet is a little bunny. What is Sue's pet?",
    "options": [
      "bunny",
      "dog",
      "duck"
    ],
    "correct": "bunny"
  },
  {
    "sentence": "The red fox hides quietly inside the cardboard box.",
    "question": "Where does the fox hide?",
    "ttsPrompt": "The red fox hides quietly inside the cardboard box. Where does the fox hide?",
    "options": [
      "box",
      "cup",
      "pen"
    ],
    "correct": "box"
  },
  {
    "sentence": "Look at the gentle donkey standing beside the road.",
    "question": "What animal is beside the road?",
    "ttsPrompt": "Look at the gentle donkey standing beside the road. What animal is it?",
    "options": [
      "donkey",
      "horse",
      "goat"
    ],
    "correct": "donkey"
  },
  {
    "sentence": "The clever cat likes to drink fresh water.",
    "question": "What does the animal do?",
    "ttsPrompt": "The clever animal likes to drink fresh water. What does it do?",
    "options": [
      "drink",
      "jump",
      "kick"
    ],
    "correct": "drink"
  },
  {
    "sentence": "He can pat his gentle dog on the head.",
    "question": "What can he do to his dog?",
    "ttsPrompt": "He can pat his gentle dog on the head. What can he do?",
    "options": [
      "pat",
      "pen",
      "cup"
    ],
    "correct": "pat"
  }
];

// 全域掛載相容變數
if (typeof window !== "undefined") {
  window.P1_VOCABULARY = P6_VOCABULARY;
  window.P6_VOCABULARY = P6_VOCABULARY;
  window.PHONICS_GROUPS = PHONICS_GROUPS;
  window.ANIMAL_ACTION_QUESTIONS = ANIMAL_ACTION_QUESTIONS;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    P1_VOCABULARY: P6_VOCABULARY,
    P6_VOCABULARY,
    PHONICS_GROUPS,
    ANIMAL_ACTION_QUESTIONS
  };
}
