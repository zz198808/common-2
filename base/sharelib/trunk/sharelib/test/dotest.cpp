#include <gtest/gtest.h>
#include <sharelib/util/log.h>
#include <sharelib/test/test.h>

using namespace std;
class shareddistEnvironment : public testing::Environment
{
public:
    virtual void SetUp()
    {
        LOG_CONFIG(DOTEST_LOGGER_CONF);
    }
    virtual void TearDown()
    {
        std::cout << "Foo FooEnvironment TearDown" << std::endl;
    }
};

int main(int argc, char** argv) {
    testing::AddGlobalTestEnvironment(new shareddistEnvironment);
    testing::InitGoogleTest(&argc, argv);
    // Runs all tests using Google Test.
    int ret = RUN_ALL_TESTS();
    LOG_SHUTDOWN();
    return ret;
}

/*
#include <cppunit/extensions/TestFactoryRegistry.h>
#include <cppunit/ui/text/TestRunner.h>
#include <cppunit/CompilerOutputter.h>
#include <matchserver/test/test.h>
#include <matchserver/config.h>
#include <matchserver/util/log.h>
#include <string>

using namespace std;
using namespace CppUnit;

int main( int argc, char **argv)
{
    MATCHSERVER_LOG_CONFIG(DOTEST_LOGGER_CONF);
    TextUi::TestRunner runner;
    runner.setOutputter(new CompilerOutputter(&runner.result(), std::cerr));
    TestFactoryRegistry &registry = TestFactoryRegistry::getRegistry();
    runner.addTest( registry.makeTest() );
    bool ok = runner.run("", false);
    
    MATCHSERVER_LOG_SHUTDOWN();
    return ok ? 0 : 1;
}
*/
