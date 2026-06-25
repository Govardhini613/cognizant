public class SingletonTest {

    public static void main(String[] args) {

        Singleton obj1 = Singleton.getInstance();
        Singleton obj2 = Singleton.getInstance();

        System.out.println("Object 1 : " + obj1);
        System.out.println("Object 2 : " + obj2);

        if (obj1 == obj2) {
            System.out.println("Only one object exists.");
        } else {
            System.out.println("Different objects created.");
        }
    }
}