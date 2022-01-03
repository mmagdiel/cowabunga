import { ReactComponent as AppleIcon } from "~icons/apple.svg"
import { ReactComponent as BananaIcon } from "~icons/banana.svg"
import { ReactComponent as BoletusIcon } from "~icons/boletus.svg"
import { ReactComponent as BreadIcon } from "~icons/bread.svg"
import { ReactComponent as ButterRollIcon } from "~icons/butter-roll.svg"
import { ReactComponent as CarrotIcon } from "~icons/carrot.svg"
import { ReactComponent as ChampignonIcon } from "~icons/champignon.svg"
import { ReactComponent as CheeseIcon } from "~icons/cheese.svg"
import { ReactComponent as CroissantIcon } from "~icons/croissant.svg"
import { ReactComponent as DrinkIconIcon } from "~icons/drink.svg"
import { ReactComponent as EggplantIcon } from "~icons/eggplant.svg"
import { ReactComponent as Fish2Icon } from "~icons/fish-2.svg"
import { ReactComponent as FishRingIcon } from "~icons/fish-ring.svg"
import { ReactComponent as FishIcon } from "~icons/fish.svg"
import { ReactComponent as FrenchFiresIcon } from "~icons/french-fires.svg"
import { ReactComponent as FriedEggIcon } from "~icons/fried-egg.svg"
import { ReactComponent as FriedTurkeyIcon } from "~icons/fried-turkey.svg"
import { ReactComponent as GarlicIcon } from "~icons/garlic.svg"
import { ReactComponent as IceCreamConeIcon } from "~icons/ice-cream-cone.svg"
import { ReactComponent as LogoIcon } from "~icons/logo.svg"
import { ReactComponent as MeetHaunchIcon } from "~icons/meet-haunch.svg"
import { ReactComponent as MuffinIcon } from "~icons/muffin.svg"
import { ReactComponent as NotFoundIcon } from "~icons/not_found.svg"
import { ReactComponent as PizzaSliceIcon } from "~icons/pizza-slice.svg"
import { ReactComponent as SaladIcon } from "~icons/salad.svg"
import { ReactComponent as SausageIcon } from "~icons/sausage.svg"
import { ReactComponent as ServerDownIcon } from "~icons/server_down.svg"
import { ReactComponent as SteakIcon } from "~icons/steak.svg"
import { ReactComponent as TomatoIcon } from "~icons/tomato.svg"
import { ReactComponent as WatermelonIcon } from "~icons/watermelon.svg"
import { createOnceSwitcher } from "../deal"

const Apple = "apple"
const Banana = "banana"
const Bread = "bread"
const ButterRoll = "butter-roll"
const Carrot = "carrot"
const Croissant = "croissant"
const Drink = "drink"
const Eggplant = "eggplant"
const Fish2 = "fish-2"
const FishRing = "fish-ring"
const Fish = "fish"
const FrenchFires = "french-fires"
const FriedEgg = "fried-egg"
const FriedTurkey = "fried-turkey"
const IceCreamCone = "ice-cream-cone"
const Logo = "logo"
const MeetHaunch = "meet-haunch"
const Champignon = "champignon"
const Muffin = "muffin"
const NotFound = "not_found"
const Salad = "salad"
const Sausage = "sausage"
const ServerDown = "server_down"
const Steak = "steak"
const Tomato = "tomato"
const Watermelon = "watermelon"
const PizzaSlice = "pizza-slice"
const Garlic = "garlic"
const Cheese = "cheese"
const Boletus = "boletus"

const icons = {
  [Apple]: AppleIcon,
  [Banana]: BananaIcon,
  [Bread]: BreadIcon,
  [ButterRoll]: ButterRollIcon,
  [Carrot]: CarrotIcon,
  [Croissant]: CroissantIcon,
  [Drink]: DrinkIconIcon,
  [Eggplant]: EggplantIcon,
  [Fish2]: Fish2Icon,
  [FishRing]: FishRingIcon,
  [Fish]: FishIcon,
  [FrenchFires]: FrenchFiresIcon,
  [FriedEgg]: FriedEggIcon,
  [FriedTurkey]: FriedTurkeyIcon,
  [IceCreamCone]: IceCreamConeIcon,
  [Logo]: LogoIcon,
  [MeetHaunch]: MeetHaunchIcon,
  [Champignon]: ChampignonIcon,
  [Muffin]: MuffinIcon,
  [NotFound]: NotFoundIcon,
  [Salad]: SaladIcon,
  [Sausage]: SausageIcon,
  [ServerDown]: ServerDownIcon,
  [Steak]: SteakIcon,
  [Tomato]: TomatoIcon,
  [Watermelon]: WatermelonIcon,
  [PizzaSlice]: PizzaSliceIcon,
  [Garlic]: GarlicIcon,
  [Cheese]: CheeseIcon,
  [Boletus]: BoletusIcon,
}

const getIcon = createOnceSwitcher(icons, FrenchFires)

export { getIcon }
