/*
Lia Messersmith
12/31/2020
This program return 3 random facts every time it is run. To make sure it's completly random it takes facts from different sections
5/8/2021: updated to make compatable with HTML doc
*/

/*
Function for holding facts about aircrafts
returns an array of facts about airCrafts
*/
function airCraft() {
    let airCraftArray = [];

    airCraftArray.push('A Boeing 747 airliner is made up of 6,000,000 parts.');
    airCraftArray.push('JFK Airport in New York was orignally named Idlewild.');
    airCraftArray.push('At any given hour, thre are over 61,000 people airborne over the United States.');
    airCraftArray.push('Pilots and co-pilots are required to eat different meals in case of food poisoning.');
    airCraftArray.push('Stewardess is the longest word in the English language typed with just the left hand.');
    airCraftArray.push('Worldwide there are approximately 200,000 flights every day.');
    airCraftArray.push('A Boeing 747 is more full-efficient than your car.');
    airCraftArray.push('The dirtest place on the plain is the tray table on the back of the seat.');
    airCraftArray.push('The tiny hole in an airplane window is to regulate cabin pressure.');
    airCraftArray.push('Aircraft wings feature a shape called an "airfoil".');

    return airCraftArray;
}

/*
Function for holding facts about artists
returns an array of facts about artists
*/
function artists() {
    let artistArray = [];

    artistArray.push('The Mona Lisa was not famous until it was stolen.');
    artistArray.push('Acrylic paint only because commercially available in the 1950s.');
    artistArray.push('Leonard da Vinci could write with one hand and draw with the other, simultaneously.');
    artistArray.push('Artists used to store their paint in animal bladders.');
    artistArray.push('The statue of David is carved from one single block of marble.');
    artistArray.push('Michelangelo was just 26 when he carved David');
    artistArray.push("Painting the Mona Lisa's lips took Leonardo da Vinci 12 years");
    artistArray.push('The color wheel predates the United States');
    artistArray.push('Banksy is the most famous graffiti artist in the world, but his name is unknown');
    artistArray.push('Picasso owned a monkey, a dog, an owl, turtle and cats');

    return artistArray;
}

/*
Function for holding facts about baseball
returns an array of facts about baseball
*/
function baseball() {
    let baseballArray = [];

    baseballArray.push('Each Major league Baseball has 108 stitches.');
    baseballArray.push('Baseball was played during the civil war as a morale booster.');
    baseballArray.push('The base most stolen in baseball is second base.');
    baseballArray.push('During a swing, a baseball bat may travel 80 mph at its peak.');
    baseballArray.push('A baseball pitcher\'s curveball can curve over 17 inches away from a straight line toward home plate.');
    baseballArray.push('No one hit an RBI in the 1968 All-Star game.');
    baseballArray.push('Baseball Hall of famer, Johnny Bench, can hold seven baseballs in one hand.');
    baseballArray.push('The Boston Americans won the baseball\'s first World Series in 1903.');
    baseballArray.push('In the late 1957 season, the Cubs and Dodgers trader their entire minor league team.');
    baseballArray.push('It is a rule that a pitcher must first wipe his hand of his uniform before he grips the ball for a pitch.');

    return baseballArray;
}

/*
Function for holding facts about celebrities
returns an array of facts about celebrities
*/
function celebrities() {
    let celebritiesArray = [];

    celebritiesArray.push('Dennis Quaid is a trained ballet dancer.');
    celebritiesArray.push('Nicolas Cage once spent $150,000 on a pet octopus.');
    celebritiesArray.push('Julia Roberts\' smile is insured for $30,000,000.');
    celebritiesArray.push('Rhianna spends $1,168,000 a year on her hair.');
    celebritiesArray.push('Prior to his death, Robin Williams had a stipulation in his contract that for any movie or' + 
                         'event that he did, the company hiring him also hire a certain number of homeless people and put them to work.');
    celebritiesArray.push('Tom Hanks has an asteroid named after him called "12812 tomhanks".');
    celebritiesArray.push('Jerry Springer was mayor of Cincinnati from 1977 to 1981.');
    celebritiesArray.push('Steven Spielberg is worth almost $3 Billion.');
    celebritiesArray.push('Rowan Atkinson has a master\'s degree in Electrical Engineering');
    celebritiesArray.push('Ryan Gosling was asked to audition for the Backstreet Boys but turned it down.');

    return celebritiesArray;
}

/*
Function for holding facts about the environment 
returns an array of facts about the environment
*/
function environment() {
    let enviroArray = [];

    enviroArray.push('77 million people are born every year.');
    enviroArray.push('80 trillion aluminum cans are used by humans every year.');
    enviroArray.push('Humans have destroyed 25-30% of the coral reefs which are homes to 25% of marine life.');
    enviroArray.push('Pollution is one of the biggest global killers, affecting over 100 million people.');
    enviroArray.push('More than 1 billion people worldwide don\'t have access to safe drinking water.');
    enviroArray.push('There are more than 73 various types of pesticides in the groundwater used for drinking.');
    enviroArray.push('Antartica is the cleanest place on Earth due to anti-pollution laws.');
    enviroArray.push('Pollution in China can change the weather in America.');
    enviroArray.push('In Australia, 1% of their unused geothermal power potential could provide energy for 36,000 years.');
    enviroArray.push('By 2050, virtually every seabird species on the planet will be eating plastic.');

    return enviroArray;
}

/*
Function for holding facts about engineering
returns an array of facts about engineering
*/
function engineering() {
    let engineArray = [];

    engineArray.push('The upper tower of the Empire State Building was originally designed as a mooring mast for airships.');
    engineArray.push('The Golden Gate Bridge took 4 years to build.');
    engineArray.push('Concrete will continue to dry and strengthen over its entire lifespan.');
    engineArray.push('The Pons Fabricius has connected Tiber Island to the heart of Rome since 62 B.C.');
    engineArray.push('The Colosseum in Rome had 80 entrances and could seat approximately 50,000 spectators.');
    engineArray.push('The Great Pyramid of Giza is the only remaining of the Seven Wonders of the World.');
    engineArray.push('A woman named Emily Roebling supervised the construction of the Brooklyn Bridge.');
    engineArray.push('Savannah, Georgia is considered to be the first planned city in the United States');
    engineArray.push('The Colosseum in Rome took 8 years to build between 73-75 A.D.');
    engineArray.push('The Eiffel Tower was the tallest structure in the world until 1930.');

    return engineArray;
}

/*
Function for holding facts about fast food
returns an array of facts about fast food
*/
function fastFood() {
    let fastFoodArray = [];

    fastFoodArray.push('McDonald\'s is the world\'s largest toy distributor.');
    fastFoodArray.push('Colonel Sanders opened another restaurant after KFC: Claudia Sanders.');
    fastFoodArray.push('There are almost 38 million combinations of sandwiches at Subway.');
    fastFoodArray.push('Chick-fil-A squeezes more than 200 million lemons a year.');
    fastFoodArray.push('A study found a link between consumption of fast food and high rates of depression.');
    fastFoodArray.push('Artificial coloring found in some fast food has been inked to diagnoses of ADHD.');
    fastFoodArray.push('In Mexico, Taco Bell labeled their signature fare as "American Food"');
    fastFoodArray.push('Subway is the largest food chain in the world.');
    fastFoodArray.push('Usain Bolt ate 1,000 chicken nuggets during the 2008 Beijing Olympics.');
    fastFoodArray.push('20% of all American meals are eaten in the car.');

    return fastFoodArray;
}

/*
Function for holding facts about fitness
returns an array of facts about fitness
*/
function fitness() {
    let fitnessArray = [];

    fitnessArray.push('The human body has more than 650 muscles.');
    fitnessArray.push('Each muscle fiber is thinner than a human hair and can support up to 1,000 times its weight.');
    fitnessArray.push('45 minutes of exercise 3 times a week can result in cells that show fewer signs of aging.');
    fitnessArray.push('You use 200 muscles to take a single step forward.');
    fitnessArray.push('Listening to music while working out can improve your performance by 15%.');
    fitnessArray.push('80% of Americans who have gym memberships don\'t use it.');
    fitnessArray.push('Physical inactivity is estimated to cost health-care systems $55 billion annually.');
    fitnessArray.push('30 minutes of working out can provide a boost to your mood for 12 hours.');
    fitnessArray.push('150 minutes of moderate exercise per week can improve your sleep quality by 65%.');
    fitnessArray.push('Gym goes are more likely to eat chocolate that non-gym goers.');

    return fitnessArray;
}

/*
Function for holding facts about geology
returns an array of facts about geology
*/
function geology() {
    let geologyArray = [];

    geologyArray.push('Rubies, sapphires and emeralds are all rarer than diamonds.');
    geologyArray.push('Antacids taste like chalk because they ARE chalk a.k.a calcium carbonate.');
    geologyArray.push('The Gulf of California is a spreading zone. Many millions of years from now, it will be an ocean.');
    geologyArray.push('Sudan has between 200-225 pyramids. Egypt as 138.');
    geologyArray.push('Istanbul is in both Europe and Asia with the Bosphorous Strait running in the middle.');
    geologyArray.push('There are 7,000 islands across 1 million square miles that make up the Caribbean Islands in total.');
    geologyArray.push('There is a heart shaped reef in the Great Barrier Reef. It\'s 55 feet in diameter and visible from above.');
    geologyArray.push('There are 18 volcanoes in the U.S. with the potential to erupt again.');
    geologyArray.push('Los Angeles, California is 86 miles east of Reno.');
    geologyArray.push('Every year, Asia and North America get closer as the Pacific is reduced by two to three centimeters.');

    return geologyArray;
}

/*
Function for holding facts about the human body
returns an array of facts about the human body 
*/
function humanBody() { 
    let humanArray = [];

    humanArray.push('The cornea is the only part of the body with no blood supply, it gets its oxygen directly from the air.');
    humanArray.push('There are more than 100,000 miles of blood vessels in your body.');
    humanArray.push('From birth to death the human body goes from 300 bones to 206.');
    humanArray.push('Half the population has eye mites.');
    humanArray.push('12% of people dream in black and white.');
    humanArray.push('Thumbs have their own pulse.');
    humanArray.push('On a genetic level, all humans are more than 99% identical.');
    humanArray.push('You can\'t breathe and swallow at the same time.');
    humanArray.push('hearts can beat outside their own bodies.');
    humanArray.push('The small intestine is approximately 25\' long.');

    return humanArray;
}

/*
Function for holding facts about laws
returns an array of facts about laws
*/
function laws() {
    let lawsArray = [];

    lawsArray.push('Canadian radio stations must play Canadian artists.');
    lawsArray.push('It\'s illegal to ride a cow drunk in Scotland.');
    lawsArray.push('On French beaches, men must wear speedos.');
    lawsArray.push('It\'s illegal to fly a kite in Victoria, Australia.');
    lawsArray.push('It is prohibited to mispronounce "Arkansas" in Arkansas.');
    lawsArray.push('It is illegal to promote the use of, or own more than, 6 dildos in Arizona.');
    lawsArray.push('It\'s illegal to wear a fake mustache in church in Alabma.');
    lawsArray.push('Candy may not contain more than 1% of alochol in Massachusetts.');
    lawsArray.push('It is illegal to die in Sellia, Italy.');
    lawsArray.push('In Samoa, it is illegal to forget your wife\'s birthday.');

    return lawsArray;
}

/*
Function for holding facts about money
returns an array of facts about money
*/
function money() {
    let moneyArray = [];

    moneyArray.push('The Pound sterling in the world\'s oldest currency still in use.');
    moneyArray.push('The motto on the first U.S. coin was "Mind your business"');
    moneyArray.push('U.K. coins can be combined to reveal a secret shield.');
    moneyArray.push('Changing the U.S $1 bill for a $1 coin would save the U.S. $4.4 billion in 30 years');
    moneyArray.push('The English £5 note contains beef tallow in minuscule amounts.');
    moneyArray.push('It takes 15 years of training to become an engraver for the U.S. Mint.');
    moneyArray.push('Seashells were once commonly used as money in many parts of the world.');
    moneyArray.push('Queen Elizabeth II is featured on the currencies of more than 30 countries.');
    moneyArray.push('A virus can live on paper currency for up to 17 days.');
    moneyArray.push('In Benjamin Franklin\'s, people repaired torn bills with a needle and a thread.');

    return moneyArray;
}

/*
Function for holding facts about occupations
returns an array of facts about occupations
*/
function occupation() {
    let occupationArray = [];

    occupationArray.push('Before the age of 40, Americans hold between 7 to 8 different jobs.');
    occupationArray.push('A book conservator restores old books, manuscripts, and other documents');
    occupationArray.push('Once an item is filed away, there is a 98% chance it will never be seen again.');
    occupationArray.push('The average office chair with wheels travels about 8 miles per year.');
    occupationArray.push('The average worker spends at least 50 minutes a day looking for lost items and files. ');
    occupationArray.push('There are people that are paid to watch paint dry.');
    occupationArray.push('Typical length of a job search: 16.9 weeks');
    occupationArray.push('Over a lifetime, the average person spends about 90,000 hours at work.');
    occupationArray.push('A typist\'s fingers travel 12.6 miles during an average workday.');
    occupationArray.push('The United States has the fourth largest workforce in the world, at 154.2 million.');

    return occupationArray;
}

/*
Function for holding facts about photography
returns an array of facts about photography
*/
function photography() {
    let photoArray = [];

    photoArray.push('The term "megapixel" was first used in 1984.');
    photoArray.push('In the early days of photography, back braces were used to keep the subject still.');
    photoArray.push('The first flashes were mini explosions.');
    photoArray.push('The first digital camera weighed 8 pounds.');
    photoArray.push('The first photo booth was created in New York City in 1925.');
    photoArray.push('A photo of Machu Picchu was the first archaeology photo ever taken.');
    photoArray.push('The first selfie was taken by Robert Cornelius in 1839.');
    photoArray.push('A white balloon will work in place of a softbox light.');
    photoArray.push('The film used to capture the photos on NASA\'s Apollo 11 moon missions was manufactured by Kodak.');
    photoArray.push('Thomas Sutton, the inventor of the SLR camera, took the first color image. ');

    return photoArray;
}

/*
Function for holding facts about phobias
returns an array of facts about phobias
*/
function phobias() {
    let phobiaArray = [];

    phobiaArray.push('Anthrophobia - Fear of people');
    phobiaArray.push('Barophobia - Fear of gravity');
    phobiaArray.push('Chionophobia - Fear of snow');
    phobiaArray.push('Entomophobia - Fear of insects');
    phobiaArray.push('Hylophobia - Fear of trees');
    phobiaArray.push('Leukophobia - Fear of the color white');
    phobiaArray.push('Megalophobia - Fear of large things');
    phobiaArray.push('Papyrophobia - Fear of paper');
    phobiaArray.push('Omphalophobia - Fear of belly buttons');
    phobiaArray.push('Pogonophobia - Fear of beards');

    return phobiaArray;
}

/*
Function for holding facts about science
returns an array of facts about science
*/
function science() {
    let scienceArray = [];

    scienceArray.push('Scientists can grow teeth from urine.');
    scienceArray.push('41 new species are discovered by scientists every day.');
    scienceArray.push('There are two dozen states of matter that we know of.');
    scienceArray.push('Scientists can turn peanut butter into diamonds.');
    scienceArray.push('Eating salmon helps grow hair faster.');
    scienceArray.push('Scientists have created a functioning guitar the size of a human blood cell.');
    scienceArray.push('In some circumstances, hot water can freeze faster than cold water.');
    scienceArray.push('It only takes 6 minutes for brain cells to react to alcohol.');
    scienceArray.push('Tomatoes have more genes than humans.');
    scienceArray.push('The average speed of a Heinz ketchup squirt is 0.028 mph');

    return scienceArray;
}

/*
Function for holding facts about technology
returns an array of facts about technology
*/
function technology() {
    let techArray = [];

    techArray.push('Bill Gates house was designed using a Macintosh Computer.');
    techArray.push('HP, Google, Microsoft, and Apple all started in garages.');
    techArray.push('Comic Sans is the most hated font in the world.');
    techArray.push('You cannot reverse a Bitcoin transaction or be forced to.');
    techArray.push('97% of the population uses Google as spellcheck.');
    techArray.push('Samsung started as a grocery store on March 1st, 1938 by Lee Byung-Chull');
    techArray.push('The Firefox logo isn\'t a fox. It\'s a red panda.');
    techArray.push('9 coding languages were invented by women.');
    techArray.push('Amazon now sells more eBooks than it does printed books.');
    techArray.push('Google rents goats to mow their lawns at their Mountain View, California headquarters.');

    return techArray;
}
/*
Function for holding facts about weather
returns an array of facts about weather
*/
function weather() {
    let weatherArray = [];

    weatherArray.push('A heatwave can make train tracks bend.');
    weatherArray.push('Sandstorms can swallow up entire cities.');
    weatherArray.push('Lighting strikes the Empire State Building about 23 times per year.');
    weatherArray.push('Worms wriggle to the surface before a flood because they can\'t get oxygen when the soil is flooded.');
    weatherArray.push('Raindrops can be the size of a housefly and fall at more than 18 mph');
    weatherArray.push('The wind doesn\'t make a sound until it blows against an object.');
    weatherArray.push('A thunderstorm can produce 99 mph winds.');
    weatherArray.push('Snowflakes falling at 2-4 mph can take up to 1 hour to reach the ground.');
    weatherArray.push('The average lifespan of a tornado is less than 15 minutes.');
    weatherArray.push('Rain contains vitamin B12');

    return weatherArray;

}


/*
Function generates random numbers and pulls random facts from various arrays.
It logs 3 random facts to the console.
*/
function randomFacts() {
        // picks a random catagory
        let randCatagory = 0

        // picks a random fact from that catagory. 
        let randFact = 0
        
        // array to hold catagory array
        let catagory = [];
        randCatagory = Math.floor(Math.random() * 18);
        randFact = Math.floor(Math.random() * 10);
        catagory = [];

        let fact = " ";

        switch(randCatagory) {
            case 0:
                catagory = airCraft();
                fact = catagory[randFact];
                break;
            case 1:
                catagory = artists();
                fact = catagory[randFact];
                break;
            case 2:
                catagory = celebrities();
                fact = catagory[randFact];
                break;
            case 3:
                catagory = engineering();
                fact = catagory[randFact];
                break;
            case 4:
                catagory = environment();
                fact = catagory[randFact];
                break;
            case 5:
                catagory = fastFood();
                fact = catagory[randFact];
                break;
            case 6:
                catagory = fitness();
                fact = catagory[randFact];
                break;
            case 7:
                catagory = geology();
                fact = catagory[randFact];
                break;
            case 8:
                catagory = humanBody();
                fact = catagory[randFact];
                break;
            case 9:
                catagory = laws();
                fact = catagory[randFact];
                break;
            case 10:
                catagory = money();
                fact = catagory[randFact];
                break;
            case 11:
                catagory = occupation();
                fact = catagory[randFact];
                break;
            case 12:
                catagory = photography();
                fact = catagory[randFact];
                break;
            case 13:
                catagory = phobias();
                fact = catagory[randFact];
                break;
            case 14:
                catagory = science();
                fact = catagory[randFact];
                break;
            case 15:
                catagory = technology();
                fact = catagory[randFact];
                break;
            case 16:
                catagory = weather();
                fact = catagory[randFact];
                break;
            case 17:
                catagory = baseball();
                fact = catagory[randFact];
                break;
            default:
                fact = "not in range";
                break;
    }
    return fact;
}

function getFacts() {
    document.getElementById("fact-1").innerHTML = "Fact 1: " + randomFacts();
    document.getElementById("fact-2").innerHTML = "Fact 2: " + randomFacts();
    document.getElementById("fact-3").innerHTML = "Fact 3: " + randomFacts();
}