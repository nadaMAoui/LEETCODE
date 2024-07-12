
public class GuessGame {

    // Declare Player objects without unnecessary initialization
    private Player p1;
    private Player p2;
    private Player p3;

    public void startGame() {
        // Initialize Player objects within the method
        p1 = new Player();
        p2 = new Player();
        p3 = new Player();

        int targetNumber = (int) (Math.random() * 10);
        System.out.println("I'm thinking of a number between 0 and 9...");

        while (true) {
            System.out.println("The number to guess is: " + targetNumber);

            // Call guess() methods to get player guesses
            int guessP1 = p1.guess();
            int guessP2 = p2.guess();
            int guessP3 = p3.guess();

            System.out.println("Player 1 guesses: " + guessP1);
            System.out.println("Player 2 guesses: " + guessP2);
            System.out.println("Player 3 guesses: " + guessP3);

            // Check for winners using boolean flags
            boolean player1Won = guessP1 == targetNumber;
            boolean player2Won = guessP2 == targetNumber;
            boolean player3Won = guessP3 == targetNumber;

            if (player1Won || player2Won || player3Won) {
                System.out.println("We have a winner!");
                break;
            } else {
                System.out.println("Players will have to try again.");
            }
        }
    }
}
//TODO decalre each class in a file

public class Player {

    private int number; // Encapsulate the guess for better practice

    public int guess() {
        number = (int) (Math.random() * 10);
        System.out.println("I'm guessing " + number); // Consistent naming
        return number; // Return the guess value
    }
}

public class GameLauncher {

    public static void main(String[] args) {
        GuessGame game = new GuessGame();
        game.startGame();
    }
}
