public class Singleton {

    // Static variable to hold the single instance
    private static Singleton instance;

    // Private constructor prevents object creation from outside
    private Singleton() {
        System.out.println("Singleton Object Created");
    }

    // Public method to return the same object every time
    public static Singleton getInstance() {

        if (instance == null) {
            instance = new Singleton();
        }

        return instance;
    }
}