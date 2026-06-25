SET SERVEROUTPUT ON;

BEGIN
    FOR rec IN (SELECT CustomerID,
                       DOB
                FROM Customers)
    LOOP

        IF FLOOR(MONTHS_BETWEEN(SYSDATE, rec.DOB)/12) > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = rec.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Loan interest updated successfully.');

END;
/ 


BEGIN

    FOR rec IN (SELECT CustomerID,
                       Balance
                FROM Customers)
    LOOP

        IF rec.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = rec.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('VIP customers updated.');

END;
/


BEGIN

    FOR rec IN
    (
        SELECT CustomerID,
               LoanID,
               EndDate
        FROM Loans
        WHERE EndDate BETWEEN SYSDATE
                          AND SYSDATE + 30
    )

    LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer '
            || rec.CustomerID
            || ' Loan '
            || rec.LoanID
            || ' is due on '
            || rec.EndDate
        );

    END LOOP;

END;
/