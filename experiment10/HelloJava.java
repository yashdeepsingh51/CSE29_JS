public class HelloJava {

	

	

	    public static void main(String[] args) {

	        // Create Savings Account Object
	        SavingsAccount s1 = new SavingsAccount(101, "Yashdeep Singh", 5000);

	        // Deposit Money
	        s1.deposit(2000);

	        // Display Details
	        System.out.println("\nSavings Account Details");
	        s1.displayDetails();

	        // Calculate Interest
	        s1.calculateInterest();

	        // Create Current Account Object
	        CurrentAccount c1 = new CurrentAccount(201, "Shiva tyagi", 10000);

	        // Deposit Money
	        c1.deposit(3000);

	        // Display Details
	        System.out.println("\nCurrent Account Details");
	        c1.displayDetails();

	        // Calculate Interest
	        c1.calculateInterest();
	    }
	}